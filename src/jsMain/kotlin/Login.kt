import csstype.Cursor.Companion.text
import emotion.css.css
import kotlinx.browser.document
import react.*
import kotlinx.coroutines.*
import kotlinx.html.InputType
import react.dom.createPortal
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.ul

private val scope = MainScope()

//val LoginContainer = document.getElementById("login-root") ?: error("Couldn't find container!")
val Login = FC<Props> {
//    var user by useState(emptyList<User>())

    div {
        h1 {
            +"Login"
        }
    }
//    userComponent{
//        onSubmit = { input ->
//            val user_name = User(input)
//            scope.launch {
//                addUserItem(user_name)
//                user = getUserList()
//            }
//        }
//    }
}

