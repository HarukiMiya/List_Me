import kotlinx.datetime.*
import kotlinx.serialization.Serializable

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Serializable
data class ShoppingListItem(val desc: String? = null, val priority: Int, val creationTime:Instant ) {
    val id: Int = desc.hashCode()
    val lastEditTime:Instant=getCurrentDateTime()
    companion object {
        const val path = "/shoppingList"
    }

    override fun toString(): String {
        return "ShoppingList [id = $id, desc = $desc, priority = $priority, creationTime = $creationTime]"
    }
}












@Serializable
data class User(val username: String, val password: String) {
    val userId: Int = username.hashCode()
    val shoppingListInfo: ShoppingListItem = getShoppingListInfo()
    val item: Collection<ShoppingListItem> = getDummyShoppingList()
    companion object {
        const val path = "/user"
    }
    override fun toString(): String {
        return "User [id = $userId, username = $username, password = $password, shoppingListInfo = $shoppingListInfo]"
    }


}

fun getShoppingListInfo():ShoppingListItem{
    return ShoppingListItem("banana",1,getCurrentDateTime())
}




fun getDummyShoppingList(): Collection<ShoppingListItem>{
    val item = ShoppingListItem("Apples",5,getCurrentDateTime())
    val item2 = ShoppingListItem("Oranges",5,getCurrentDateTime())

    return listOf(item, item2)

}

fun getCurrentDateTime(): Instant {
    // return something like 2022-11-17T11:56:34.311Z
    val currentMoment: Instant = Clock.System.now()
    return currentMoment
}

fun convertDateTime(currentMoment: Instant):String  {
        var day=currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).dayOfMonth.toString()
        var month= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).monthNumber.toString()
        var year= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).year.toString()
        var time= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).time.toString().take(8)
        return "Date: $month-$day-$year Time: $time"
}


