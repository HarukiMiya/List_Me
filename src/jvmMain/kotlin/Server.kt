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
val userDatabase = client.getDatabase("userList")
val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val collection = database.getCollection<ShoppingListItem>()
//val userCollection = userDatabase.getCollection<User>()
val userCollection = database.getCollection<User>()

val users = mutableListOf(
    User("Victor", "green"),
    User("Som", "Yes")
)
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
                    this::class.java.classLoader.getResource("home.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            get("/index") {
                call.respondText(
                    this::class.java.classLoader.getResource("index.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            get("/signUp") {
                call.respondText(
                    this::class.java.classLoader.getResource("signUp.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            get("/logIn") {
                call.respondText(
                    this::class.java.classLoader.getResource("logIn.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            static("/") {
                resources("")
            }

            route(ShoppingListItem.path) {
                get {
                    call.respond(collection.find().toList())
//                    call.respond(userCollection.find().toList())
                }
                post {
                    collection.insertOne(call.receive<ShoppingListItem>())
//                    userCollection.insertOne(call.receive<User>())
                    call.respond(HttpStatusCode.OK)
                }
                put("/{id}") {
                    val id = call.parameters["id"]?.toInt() ?: error("Invalid delete request")
                    val listItemRequest= call.receive<ShoppingListItem>()
                    collection.updateOne(ShoppingListItem::id eq id, listItemRequest)
                }
                delete("/{id}") {
                    val id = call.parameters["id"]?.toInt() ?: error("Invalid delete request")
                    collection.deleteOne(ShoppingListItem::id eq id)
                    call.respond(HttpStatusCode.OK)
                }
            }
            // used commented code for testing, redid tutorial
            /*
            route(User.path){
                get {
                    call.respond(users)
                }
                post {
                    users += call.receive<User>()
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{userId}") {
                    val id = call.parameters["userId"]?.toInt() ?: error("Invalid delete request")
                    users.removeIf { it.userId == id }
                    call.respond(HttpStatusCode.OK)
                }
            }
             */
            route(User.path){
                get{
                    call.respond(userCollection.find().toList())
                }
                post {
                    userCollection.insertOne(call.receive<User>())
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{userId}"){
                    val id = call.parameters["userId"]?.toInt() ?: error("Invalid delete request")
                    userCollection.deleteOne(User::userId eq id)
                    call.respond(HttpStatusCode.OK)
                }
            }

        }

    }.start(wait = true)
}