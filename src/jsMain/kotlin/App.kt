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
import react.dom.html.ReactHTML.i
import react.dom.html.ReactHTML.style
import react.router.useNavigate

private val scope = MainScope()

val App = FC<Props> {
    var shoppingList by useState(emptyList<ShoppingListItem>())
    //var user:User by useState(User("owner", "pw", false))
    var userList by useState(emptyList<User>())
    //val user:User = User("Dumb", "Dumber", false)
    //var activeUser:String = "dummy"
    var activeUser:String = "dummy"
    var selectedEditItem: ShoppingListItem?  by useState(null)
    val navigate = useNavigate()
//    var counter=0

    useEffectOnce {
        scope.launch{
            if(findActive() == "Logged out")
            {
                navigate("/")
            }
            shoppingList = getShoppingList(findActive())
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
                        }
                    }
                }
            }
        }
    }

    /*
    useEffectOnce {
        scope.launch {
            shoppingList = getShoppingList(activeUser)
            //shoppingList=getListForUser()
        }
    }
     */
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
                val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },getCurrentDateTime(),null,listOf(findActive()))
                addShoppingListItem(cartItem)
                shoppingList = getShoppingList(findActive())
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
    p {
        id = "p-text"

        +"Here is your shopping list"
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
                                shoppingList = getShoppingList(findActive())// what is the point of this
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
                                val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },item.creationTime,getCurrentDateTime(),listOf(findActive()))
                                editShoppingListItem(item,cartItem)
                                shoppingList = getShoppingList(findActive())
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
