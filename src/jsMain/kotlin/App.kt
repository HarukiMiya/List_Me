import csstype.*
import csstype.Cursor.Companion.pointer
import csstype.Font.Companion.icon
import emotion.react.css
import kotlinx.browser.document
import react.*
import kotlinx.coroutines.*
import kotlinx.css.body
import react.dom.html.ReactHTML.header
import kotlinx.css.i
import react.dom.html.ReactHTML.nav
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.ul
import react.dom.html.HTMLAttributes
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.ReactHTML.body
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.i
import react.dom.html.ReactHTML.style
import react.router.useNavigate

private val scope = MainScope()

val App = FC<Props> {
    var shoppingList by useState(emptyList<ShoppingListItem>())
    var permissionsList by useState(listOf("empty"))
    val (activeUser, setActiveUser) = useState("")
    var selectedEditItem: ShoppingListItem?  by useState(null)
    val navigate = useNavigate()
//    var counter=0

    useEffectOnce {
        scope.launch{
            setActiveUser(findActive())
            if(activeUser == "Logged out")
            {
                navigate("/")
            }
            console.log("We are inside useEffectOnce, active user = $activeUser")
            shoppingList = getShoppingList(findActive())
            permissionsList = getPermissions(findActive())
            //console.log("permissions: $permissionsList")
            //console.log("shoppingList: $shoppingList")
        }
    }
    header {
        nav {
            css { }
            div {
                ReactHTML.ul {
                    css { height = 10.vh; marginLeft = 5.vw; }
                    ReactHTML.li {
                        css { display = Display.inline; margin = 5.vh; cursor = pointer;}
                        +"Sign Out"
                        onClick = {
                            scope.launch {
                                resetActive()
                            }
                            navigate("/")
                        }
                    }
                    ReactHTML.li {
                        css { display = Display.inline; float = Float.right; margin = 2.5.vh; }
                        +"Welcome,  "
                        p{
                            id = "welcome-username"
                        }
                        scope.launch {
                            document.getElementById("welcome-username")?.textContent = findActive()
                            //console.log("We are inside Welcome part, active user = $activeUser")
                            //console.log("First permissions: " + permissionsList[0])
                            //console.log("shoppingList: $shoppingList")
                        }
                    }
                }
            }
        }
    }

    div {
        h1 {
            +"Full-Stack Shopping List"
        }
    }
    p{
        id = "p-text"
        +"Add item to list"
    }
    inputComponent {
        onSubmit = { input ->

            scope.launch {
                val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },getCurrentDateTime(),null,listOf(activeUser))
                addShoppingListItem(cartItem)
                shoppingList = getShoppingList(activeUser)
            }
        }
    }
    div {
        p {
            id = "p-text"
            +"Add user to access list"
        }

        inputComponent {
            onSubmit = { input ->
                val userinfo = User(input, "", status = false)
                scope.launch {
                    val addedUser = searchUser(userinfo)
                    if (addedUser != "False") {
                        console.log(addedUser)
                        console.log(addPermission(findActive(), addedUser))
                    }
                    else{
                        console.log("User does not exist")
                    }

                }
            }
        }
    }
    if(permissionsList[0] != "empty") {
        div {
            p {
                id = "p-text"
                +"These users have shared their list with you: $permissionsList"
                br{}
                +"Add user to display their list, enter \"reset\" to see your list"
            }
            inputComponent {
                onSubmit = { input ->
                    //val userinfo = User(input, "", status = false)
                    scope.launch {

                        if (permissionsList.contains(input) || input == "reset") {
                            shoppingList = if(input=="reset"){
                                setActiveUser(findActive())
                                getShoppingList(findActive())
                            } else{
                                setActiveUser(input)
                                getShoppingList(input)
                            }

                            document.getElementById("not-found-msg")?.textContent = ""
                        } else {
                            document.getElementById("not-found-msg")?.textContent = "User not found. Try again."
                        }
                    }
                }
            }
            p {
                id = "not-found-msg"
            }
        }
    }

    p {
        id = "p-text"

        +"Here is selected shopping list"
    }
    ul {
        shoppingList.sortedByDescending(ShoppingListItem::priority).forEach { item ->
            li {
//                counter+=1
                if(item!=selectedEditItem) {
                    p {
//                        +"$counter"
                        i {
                            className = ClassName("fa fa-trash")
                        }
                        onClick = {
                            scope.launch {
                                deleteShoppingListItem(item)
                                shoppingList = getShoppingList(activeUser)// what is the point of this
                            }
                        }
                    }
                    p {
                        i {
                            className = ClassName("fa fa-pencil")
                        }
                        onClick = {
                            //window.alert("Clicked edit!")
                            selectedEditItem = item
                        }
                    }
                }

                key = item.toString()
                if(item==selectedEditItem) {
                    //print as a textfield
                    editComponent{
                        listItem=item
                        onSubmit = { input->
                            scope.launch {
                                val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },item.creationTime,getCurrentDateTime(),listOf(activeUser))
                                editShoppingListItem(item,cartItem)
                                shoppingList = getShoppingList(activeUser)
                            }
                            selectedEditItem=null
                        }
                    }
                }
                else{
                    +"[${item.priority}] ${item.desc}  || "
                    p {
                        className = ClassName("font-small")
                        +" Last Edited: ${convertDateTime(item.lastEditTime)}"
                        +" Creation: ${convertDateTime(item.creationTime)}"
                    }
                }


            }
        }
    }

}
