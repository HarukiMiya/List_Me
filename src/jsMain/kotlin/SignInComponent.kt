
import csstype.AlignItems
import csstype.AlignItems.Companion.center
import csstype.ClassName
import csstype.HtmlAttributes
import emotion.css.css
import emotion.react.css
import org.w3c.dom.HTMLFormElement
import react.*
import org.w3c.dom.HTMLInputElement
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.h1
import react.router.useNavigate

external interface SignInProps : Props {
    var onSubmit: (String,String) -> Unit
}

val signInComponent = FC<SignInProps> { props -> // this takes onsubmit which is a string
    val (username, setUsername) = useState("")
    val (pass, setPass) = useState("")

    val submitHandler: FormEventHandler<HTMLFormElement> = { // on submit do this
        it.preventDefault() // prevents autosubmit or something
        setPass("") // clear text
        setUsername("")
        props.onSubmit(username, pass)
    }
    val navigate = useNavigate()

    val changeHandlerName: ChangeEventHandler<HTMLInputElement> = {
        setUsername(it.target.value)
    }
    val changeHandlerPass: ChangeEventHandler<HTMLInputElement> = {
        setPass(it.target.value)
    }
    div {
        className = ClassName("main")
        div {
            id = "sign"
            h1 {
                +"Sign Up"
            }
        }


            form {
                className = ClassName("form1")
                onSubmit = submitHandler

                label {
                    htmlFor = "name"

                    input {
                        id = "un"
                        type = InputType.text
                        onChange = changeHandlerName
                        name = "name"
                        value = username
                        placeholder = "Username"

                    }
                }
                br {}
                label {
                    htmlFor = "password"

                    input {
                        id = "pass"
                        type = InputType.password
                        onChange = changeHandlerPass
                        name = "password"
                        value = pass
                        placeholder = "Password"
                    }
                }

                div {

                    className = ClassName("signIn")

                    input {
                        id = "submit"
                        type = InputType.submit
                        className = ClassName("btn")
                        value = "SignUp"
                        onClick = {
                            navigate("/logIn")
                        }
                    }
                }
            }

        }

}
