

import csstype.HtmlAttributes
import io.ktor.util.*
import kotlinx.css.input
import kotlinx.css.map
import kotlinx.css.option
import kotlinx.css.p
import org.w3c.dom.HTML.input
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement

import react.FC
import react.Props
import react.dom.aria.AriaAutoComplete
import react.dom.aria.AriaRole
import react.dom.aria.ariaRequired
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.data
import react.dom.html.ReactHTML.datalist
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input

import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.map
import react.dom.html.ReactHTML.option
import react.dom.onChange
import react.key

import react.useState

external interface SearchProps : Props {
    var onSubmit: (String) -> Unit
}
var userList by useState(emptyList<User>())



val addComponent = FC<SearchProps> { props ->
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
        id = "input-form2"
        onSubmit = submitHandler
        input {

            name = "user"
            id = "search"
            list = "userList"
            type = InputType.text
            onChange = changeHandler
            value = text

            ariaRequired = true
            placeholder = "User"
            datalist {
                id = "userList"

                userList.forEach {
                    option{
                        value = it.username
                    }
                }
            }
        }
    }
}
