import kotlinx.serialization.Serializable

@Serializable
data class ShoppingListItem(val desc: String, val priority: Int) {
    val id: Int = desc.hashCode()

    companion object {
        const val path = "/shoppingList"
    }
}

//data class User(val username: String) {
//    val userId: Int = username.hashCode()
//
//    companion object {
//        const val path = "/user"
//    }
//}