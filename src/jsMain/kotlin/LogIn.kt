import csstype.AlignItems.Companion.center
import csstype.Display
import csstype.FlexDirection.Companion.column
import csstype.Float
import csstype.vh
import csstype.vw
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.*
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.header
import react.dom.html.ReactHTML.nav
import react.dom.html.ReactHTML.ul
import react.dom.html.ReactHTML.li
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

    header {
        nav {
            css { }
            div {
                ul {
                    css { height = 10.vh; marginLeft = 5.vw; }
                    li {
                        css { display = Display.inline; margin = 5.vh; }
                        +"Home"
                        onClick = {
                            navigate("/")
                        }
                    }
                    li {
                        css { display = Display.inline; margin = 5.vh; }
                        +"LogIn"
                        onClick = {
                            navigate("/logIn")
                        }
                    }
                    li {
                        css { display = Display.inline; margin = 5.vh; }
                        +"Sign Up"
                        onClick = {
                            navigate("/signUp")
                        }
                    }
                }
            }
        }
    }
    div {
        css {
            display = Display.flex
            flexDirection = column
            alignItems = center
        }
        logInComponent {
            onSubmit= { input, input2 -> // differet onSubmit than the other??
                val userinfo = User(input,input2, true)
                console.log(input)
                console.log(input2)
                scope.launch {
                    if (searchUserNamePwd(userinfo) == "True") {
                        owner = userinfo.username
                        pw = userinfo.password
                        resetActive()
                        setActive(userinfo)
                        navigate("/index")
                        console.log("PLEASE WORK")
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

