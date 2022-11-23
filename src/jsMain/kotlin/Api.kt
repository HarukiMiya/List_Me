import io.ktor.http.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.serialization.kotlinx.json.*

import kotlinx.browser.window

val endpoint = window.location.origin // only needed until https://youtrack.jetbrains.com/issue/KTOR-453 is resolved

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun getShoppingList(): List<ShoppingListItem> {
    return jsonClient.get(endpoint + ShoppingListItem.path).body()
}

suspend fun addShoppingListItem(shoppingListItem: ShoppingListItem) {
    jsonClient.post(endpoint + ShoppingListItem.path) {
        contentType(ContentType.Application.Json)
        setBody(shoppingListItem)
    }
}

suspend fun deleteShoppingListItem(shoppingListItem: ShoppingListItem) {
    jsonClient.delete(endpoint + ShoppingListItem.path + "/${shoppingListItem.id}")
}

suspend fun editShoppingListItem(shoppingListItem: ShoppingListItem, updatedItem: ShoppingListItem) {

    jsonClient.put(endpoint + ShoppingListItem.path+ "/${shoppingListItem.id}")
    {
        contentType(ContentType.Application.Json)
        setBody(updatedItem)
    }
}

suspend fun getUser(): List<User> {
    return jsonClient.get(endpoint + User.path).body()
}

suspend fun addUser(user: User) {
    jsonClient.post(endpoint + User.path) {
        contentType(ContentType.Application.Json)
        setBody(user)
    }
}

suspend fun deleteUserItem(user:User){
    jsonClient.delete(endpoint + User.path + "/${user.userId}")
}

suspend fun searchUser(user:User): String{
    return jsonClient.get(endpoint + User.path + "/${user.username}").body()
}