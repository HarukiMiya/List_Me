import ShoppingListItem.Companion.path
import csstype.UserSelect.Companion.element
import kotlinx.browser.document
import react.FC
import react.Props
import react.create
import react.createElement
import react.dom.client.createRoot
import react.router.Route
import react.router.Routes
import react.router.dom.BrowserRouter
import kotlin.coroutines.EmptyCoroutineContext.get
import kotlin.coroutines.coroutineContext


val Application = FC<Props> {
    BrowserRouter {
        Routes {
            Route {
                path = "/signIn"
                element = SignIn.create()
            }
            Route {
                //index=true
                path="/index"
                element = App.create()
            }
            Route {
                //index=true
                path="/"
                element = Home.create()
            }
        }
    }
}

fun main() {
    val container = document.getElementById("root") ?: error("Couldn't find container!")
    createRoot(container).render(Application.create())

}