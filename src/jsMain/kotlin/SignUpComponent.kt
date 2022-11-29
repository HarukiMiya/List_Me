
import csstype.ClassName
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.router.useNavigate
import react.useState

external interface SignUpProps : Props {
    var onSubmit: (String,String) -> Unit
}

val signUpComponent = FC<SignUpProps> { props -> // this takes onsubmit which is a string
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
                        id = "users"
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
                        id = "passwords"
                        type = InputType.password
                        onChange = changeHandlerPass
                        name = "password"
                        value = pass
                        placeholder = "Password"
                    }
                }

                div {

                    className = ClassName("signUp")

                    input {
                        id = "submit"
                        type = InputType.submit
                        className = ClassName("btn")
                        value = "SignUp"
                    }
                }
            }
        }
}
