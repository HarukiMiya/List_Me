import csstype.AlignItems.Companion.center
import csstype.ClassName
import csstype.Display
import csstype.FlexDirection.Companion.column
import csstype.HtmlAttributes
import emotion.react.css
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.*
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.i
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ul
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.button
private val scope = MainScope()


val Login = FC<Props> {
    //val (token, setToken) = useState("")
    div {
        css {
            display = Display.flex
            flexDirection = column
            alignItems = center;
        }
        div {
            h1 {
                +"Please Log In"
            }
        }
        loginComponent {
            onSubmit= { input, input2 -> // differet onSubmit than the other??
                //val user = User(input,input2)
                console.log(input)
                console.log(input2)
//                scope.launch {
//                    editShoppingListItem(item,cartItem)
//                    shoppingList = getShoppingList()
//                }
//                selectedEditItem=null
            }
        }

//        form {
//            label {
//                +"Username"
//                input {
//                    type = InputType.text
//                }
//            }
//            label {
//                +"Password"
//                input {
//                    type = InputType.password
//                }
//            }
//            button {
//                input {
//                    type = InputType.submit
//                }
//            }



    }
}





