import csstype.*
import csstype.Font.Companion.icon
import emotion.react.css
import kotlinx.browser.document
import react.*
import kotlinx.coroutines.*
import kotlinx.css.body
import kotlinx.css.i
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

private val scope = MainScope()

val App = FC<Props> {
    var shoppingList by useState(emptyList<ShoppingListItem>())
    //var user:User by useState(User("owner", "pw", false))
    var userList by useState(emptyList<User>())
    var user:User = User("Dumb", "Dumber", false)

    var selectedEditItem: ShoppingListItem?  by useState(null)
//    var counter=0
    useEffectOnce {
        scope.launch{
            user = findActive()[0]
            shoppingList = getShoppingList(user.username)
        }
    }
    /*
    useEffectOnce {
        scope.launch {
            shoppingList = getShoppingList(user.username)
            //shoppingList=getListForUser()
        }
    }
     */
    h1 {
        +"Full-Stack Shopping List"
    }
    inputComponent {
        onSubmit = { input ->
            val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },getCurrentDateTime(),null,listOf(user.username))
            scope.launch {
                addShoppingListItem(cartItem)
                shoppingList = getShoppingList(user.username)
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
                                shoppingList = getShoppingList(user.username)// what is the point of this
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
                            val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' },item.creationTime,getCurrentDateTime(),listOf(user.username))
                            scope.launch {
                                editShoppingListItem(item,cartItem)
                                shoppingList = getShoppingList(user.username)
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