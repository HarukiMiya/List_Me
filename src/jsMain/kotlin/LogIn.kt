import csstype.AlignItems.Companion.center
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

val LogIn = FC<Props> {
    var user by useState(emptyList<User>())
    val (exist, setExist) = useState(false)
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
            alignItems = center
        }
        div {
            id = "sign"
            h1 {
                +"Please Log In"
            }
        }
        logInComponent {
            onSubmit= { input, input2 -> // differet onSubmit than the other??
                val userinfo = User(input,input2)
                console.log(input)
                console.log(input2)
                scope.launch {
                    if (searchUserNamePwd(userinfo) == "True") {
                        owner = userinfo.username
                        pw = userinfo.password
                        navigate("/index")
                    } else {
                        setExist(true)
                    }
                }
            }
        }
        if (exist) {
            p {
                id = "exists"
                +"Incorrect username or password"
            }
        }
    }
}

