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

@JsName("$")
@JsNonModule
@JsModule("jquery")
external fun jq(id: String): dynamic


private val scope = MainScope()

//var inputVal =

val App = FC<Props> {
    var shoppingList by useState(emptyList<ShoppingListItem>())
    //var userList by useState(emptyList<User>())
    var selectedEditItem: ShoppingListItem?  by useState(null)
//    var counter=0
    useEffectOnce {
        scope.launch {
            shoppingList = getShoppingList()
        }
    }
    h1 {
        +"Full-Stack Shopping List"
    }
    inputComponent {
        onSubmit = { input ->
            val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' })
            scope.launch {
                addShoppingListItem(cartItem)
                shoppingList = getShoppingList()
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
                                shoppingList = getShoppingList()// what is the point of this
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
                        onSubmit = { input->
                            val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' })
                            scope.launch {
                                editShoppingListItem(item,cartItem)
                                shoppingList = getShoppingList()
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
                    }
                }


            }
        }
    }

}