
import csstype.ClassName
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
    // Maybe this is better format, Haruki's code
    /*

    form {
        onSubmit = submitHandler

        label {
            htmlFor = "name"
            input {
                type = InputType.text
                onChange = changeHandlerName
                name = "name"
                value = username
                placeholder = "Username"
            }
        }
        br{}
        label {
            htmlFor = "password"
            input {
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
                type = InputType.submit
                className = ClassName("btn")
                value = "SignUp"
//                onClick = {
//                    navigate("/logIn")
//                }
            }
        }
    }

     */
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
