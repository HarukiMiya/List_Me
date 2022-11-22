import csstype.AlignItems.Companion.center
import csstype.Display
import csstype.FlexDirection.Companion.column
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.*
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.div
import react.router.useNavigate

private val scope = MainScope()


val SignUp = FC<Props> {
    var user by useState(emptyList<User>())
    val navigate = useNavigate()

    useEffectOnce {
        scope.launch {
            user = getUser()
        }
    }
    div {
        css {
            display = Display.flex
            flexDirection = column
            alignItems = center;
        }
        div {
            h1 {
                +"Please Sign In"
            }
        }
        signUpComponent {
            onSubmit= { input, input2 ->
                val userinfo = User(input,input2)
                console.log(input)
                console.log(input2)
                scope.launch {
                    addUser(userinfo)
//                    addUser(User("hello", "world"))
                    navigate("/logIn")
                    user = getUser()
                }
            }
        }
    }
}




