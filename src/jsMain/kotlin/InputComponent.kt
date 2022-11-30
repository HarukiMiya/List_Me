
import csstype.ClassName
import kotlinx.coroutines.MainScope
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.ButtonType
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.i
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useState

external interface InputProps : Props {
    var onSubmit: (String) -> Unit
}
external interface EditProps : Props {
    var onSubmit: (String) -> Unit
    var listItem:(ShoppingListItem)

}
external interface SearchProps : Props {
    var onSubmit: (String) -> Unit
    var listUsername: (User)
}

val inputComponent = FC<InputProps> { props ->
    val (text, setText) = useState("")

    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        setText("")
        props.onSubmit(text)
    }

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        setText(it.target.value)
    }
    form {
        id = "input-form"
        onSubmit = submitHandler
        input {
            id = "shopping"
            type = InputType.text
            onChange = changeHandler
            value = text
        }
    }
}
private val scope = MainScope()

val editComponent = FC<EditProps> { props ->
    val (text, setText) = useState(props.listItem.desc+"!".repeat(props.listItem.priority))

    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        setText("")
        props.onSubmit(text)
    }

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        setText(it.target.value)
    }
    form {
        id = "edit-form"
        onSubmit = submitHandler
        button {
            type = ButtonType.submit
            i {
                className = ClassName("fa fa-floppy-o")
            }
        }
        input {
            type = InputType.text
            onChange = changeHandler
            value = text
        }
    }
}

val addComponent = FC<SearchProps> { props ->
    val (text, setText) = useState("")
//    val (user, setUser) = useState(props.listUsername.username)

    val submitHandler: FormEventHandler<HTMLFormElement> = {
        it.preventDefault()
        setText("")
        props.onSubmit(text)
    }

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        setText(it.target.value)
    }

    form {
        id = "input-form"
        onSubmit = submitHandler
        input {
            id = "shopping"
            type = InputType.text
            onChange = changeHandler
            value = text

            name = "user"
            list = "search-access"
        }
    }
}
