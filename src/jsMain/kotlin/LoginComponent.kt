
import csstype.ClassName
import org.w3c.dom.HTMLFormElement
import react.*
import org.w3c.dom.HTMLInputElement
import react.dom.aria.ariaLabel
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.AutoComplete
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label

external interface LoginProps : Props {
    var onSubmit: (String,String) -> Unit
}

val loginComponent = FC<LoginProps> { props -> // this takes onsubmit which is a string
    val (username, setUsername) = useState("")
    val (pass, setPass) = useState("")

    val submitHandler: FormEventHandler<HTMLFormElement> = { // on submit do this
        it.preventDefault() // prevents autosubmit or something
        setPass("") // clear text
        setUsername("")
        props.onSubmit(username, pass)
    }

    val changeHandlerName: ChangeEventHandler<HTMLInputElement> = {
        setUsername(it.target.value)
    }
    val changeHandlerPass: ChangeEventHandler<HTMLInputElement> = {
        setPass(it.target.value)
    }

    h2 {
        +"login"
    }
    form {
        onSubmit = submitHandler

        label {
            htmlFor = "name"
            +"Name:"
            input {
                type = InputType.text
                onChange = changeHandlerName
                name = "name"
                value = username
            }
        }


        label {
            htmlFor = "password"
            +"Password:"
            input {
                type = InputType.password
                onChange = changeHandlerPass
                name = "password"
                value = pass

            }
        }

        div {
            input {
                type = InputType.submit
                className = ClassName("btn")
                value = "LOGIN"
            }
        }
    }
}
