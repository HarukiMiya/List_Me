import csstype.AlignItems.Companion.center
import csstype.Auto
import csstype.Display
import csstype.FlexDirection.Companion.column
import csstype.vh
import csstype.vw
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.Align
import kotlinx.css.Appearance
import react.*
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.nav
import react.dom.html.ReactHTML.ul
import react.router.useNavigate

private val scope = MainScope()


val Home = FC<Props> {
    val navigate = useNavigate()
    nav {
        css { }
        div {
            ul {
                css{height = 10.vh; marginLeft = 5.vw;}
                li {
                    css { display = Display.inline; margin = 5.vh;}
                    +"Home"
                }
                li {
                    css { display = Display.inline; margin = 5.vh;}
                    +"LogIn"
                    onClick = {
                        navigate("/logIn")
                    }
                }
                li {
                    css { display = Display.inline; margin = 5.vh;}
                    +"SignUp"
                    onClick = {
                        navigate("/signUp")
                    }
                }
            }
        }
    }
    div{
        h1{
            +"Welcome"
        }
    }
}