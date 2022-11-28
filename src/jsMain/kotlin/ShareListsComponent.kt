

import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.router.useNavigate
import react.useState
import csstype.ClassName
import react.*

import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.h1
import react.router.useNavigate

external interface ShareListsProps : Props {
    var onSubmit: (String) -> Unit
}


val shareListsComponent = FC<ShareListsProps>{ props ->
    val (username, setUsername) = useState("")


    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        setUsername("")
        props.onSubmit(username)
    }

    val navigate = useNavigate()
    val changeHandlerName: ChangeEventHandler<HTMLInputElement> = {
        setUsername(it.target.value)
    }

    form {
        //id = "input-form"
        onSubmit = submitHandler
        input {
            id = "search"
            type = InputType.text
            onChange = changeHandlerName
            value = username
            placeholder = "Person"
        }
    }



}


