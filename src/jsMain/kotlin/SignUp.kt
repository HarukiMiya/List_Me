import csstype.AlignItems.Companion.center
import csstype.ClassName
import csstype.Display
import csstype.FlexDirection.Companion.column
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.*
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.router.useNavigate

private val scope = MainScope()


val SignUp = FC<Props> {
    val navigate = useNavigate()
    var user by useState(emptyList<User>())
    val (exist, setExist) = useState(false)

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
        signUpComponent {
            onSubmit = { input, input2 -> // differet onSubmit than the other??
                val userinfo = User(input, input2, status = false)
                console.log(input)
                console.log(input2)
                scope.launch {
                    if (searchUser(userinfo) == "False") {
                        addUser(userinfo)
                        navigate("/logIn")
                    } else {
                        setExist(true)
                    }
                }
            }
        }
        if (exist) {
            p {
                id = "exists"
                +"Username already taken"
            }

        }
    }
}
