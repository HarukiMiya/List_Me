import com.mongodb.ConnectionString
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.eq
import org.litote.kmongo.reactivestreams.KMongo

//val shoppingList = mutableListOf(
//    ShoppingListItem("Cucumbers 🥒", 1),
//    ShoppingListItem("Tomatoes 🍅", 2),
//    ShoppingListItem("Orange Juice 🍊", 3)
//)
val client = KMongo.createClient().coroutine
val database = client.getDatabase("shoppingList")

val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

//val client =
//    if (connectionString != null) KMongo.createClient(connectionString).coroutine else KMongo.createClient().coroutine
//val database = client.getDatabase(connectionString?.database ?: "shoppingList")
val collection = database.getCollection<ShoppingListItem>()
fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 9090
    embeddedServer(Netty, 9090) {
        install(ContentNegotiation) {
            json()
        }
        install(CORS) {
            allowMethod(HttpMethod.Get)
            allowMethod(HttpMethod.Post)
            allowMethod(HttpMethod.Delete)
            anyHost()
        }
        install(Compression) {
            gzip()
        }
        routing {
            get("/") {
                call.respondText(
                    this::class.java.classLoader.getResource("index.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            get("/login") {
                call.respondText(
                    this::class.java.classLoader.getResource("login.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            static("/") {
                resources("")
            }
            route(ShoppingListItem.path) {
                get {
                    call.respond(collection.find().toList())
                }
                post {
                    collection.insertOne(call.receive<ShoppingListItem>())
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{id}") {
                    val id = call.parameters["id"]?.toInt() ?: error("Invalid delete request")
                    collection.deleteOne(ShoppingListItem::id eq id)
                    call.respond(HttpStatusCode.OK)
                }
            }
//            route(User.path) {
//                get {
//                    call.respond(collection.find().toList())
//                }
//                post {
//                    collection.insertOne(call.receive<User>())
//                    call.respond(HttpStatusCode.OK)
//                }
//                delete("/{userId}") {
//                    val id = call.parameters["userId"]?.toInt() ?: error("Invalid delete request")
//                    collection.deleteOne(User::id eq id)
//                    call.respond(HttpStatusCode.OK)
//                }
//            }
        }

    }.start(wait = true)
}