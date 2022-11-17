import csstype.*
import csstype.Font.Companion.icon
import csstype.FontSize.Companion.smaller
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
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.i
import react.dom.html.ReactHTML.small
import react.dom.html.ReactHTML.style

@JsName("$")
@JsNonModule
@JsModule("jquery")
external fun jq(id: String): dynamic


private val scope = MainScope()

//var inputVal =

val App = FC<Props> {
    var shoppingList by useState(emptyList<ShoppingListItem>())

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
                key = item.toString()
                p {
                    id = "delete"

                    i {
                        className = ClassName("fa fa-trash")
                    }
//                    +"\uD83D\uDDD1️"
                    onClick = {
                        scope.launch {
                            deleteShoppingListItem(item)
                            shoppingList = getShoppingList()
                        }
                    }
                }
                p{
                    id = "edit"

                    i {
                        className = ClassName("fa fa-pencil")
                    }
//                    +"✏️"
                    onClick = {
                        jq(".${item.id} #edit-form").toggleClass("show-inline")
                        jq("#${item.id}").toggleClass("suppress")
                        console.log("${item.id}")
                    }
                }

                p {
                    id = "${item.id}"
                    +"[${item.priority}] ${item.desc} || "
                    ReactHTML.small{
                        +" DateTime: ${item.DateTime}"
                    }

                }

                div {
                    className = ClassName("${item.id}")
                    editComponent {
                        var item_desc = item.desc
                        onSubmit = { input ->
//                        jq("#edit-form").toggleClass("show-inline")
//                        jq("#${item.id}").toggleClass("suppress")
                            val cartItem = ShoppingListItem(input.replace("!", ""), input.count { it == '!' })
                            scope.launch {
                                deleteShoppingListItem(item)
                                addShoppingListItem(cartItem)
//                            editShoppingListItem(item)
                                shoppingList = getShoppingList()
                            }
                        }
                    }
                }
            }
        }
    }
}

//val LoginContainer = document.getElementById("login-root") ?: error("Couldn't find container!")
//val LoginComponent = FC<Props> {
//    h1 {
//        +"Login"
//    }
//}