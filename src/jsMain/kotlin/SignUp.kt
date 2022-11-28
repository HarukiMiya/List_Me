import csstype.AlignItems.Companion.center
import csstype.ClassName
import csstype.Display
import csstype.FlexDirection.Companion.column
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


val SignUp = FC<Props> {
    val navigate = useNavigate()
    var user by useState(emptyList<User>())
    val (exist, setExist) = useState(false)

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
