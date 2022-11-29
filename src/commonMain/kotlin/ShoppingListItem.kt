
import kotlinx.datetime.Clock
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.Serializable
import kotlin.random.Random

@Serializable
data class ShoppingListItem(val desc: String, val priority: Int, val creationTime:Instant?, val lastEditTime:Instant?, val owners: List<String> ) {
    val id: Int = desc.hashCode()+ Random.nextInt(0, 100)
    companion object {
        const val path = "/shoppingList"
    }
}

@Serializable
data class User(val username: String, val password: String, val status: Boolean, val permissions: List<String>? = null) {
    val userId: Int = username.hashCode()
//    val shoppingListInfo: ShoppingListItem = getShoppingListInfo()
//    val item: Collection<ShoppingListItem> = getDummyShoppingList()
    companion object {
        const val path = "/user"
    }
}


@Serializable
data class Share(val username: String, val status: Boolean) {
    val userId: Int = username.hashCode()
    //    val shoppingListInfo: ShoppingListItem = getShoppingListInfo()
//    val item: Collection<ShoppingListItem> = getDummyShoppingList()
    companion object {
        const val path = "/user"
    }
}

public var owner: String = ""
public var pw: String = ""
//fun getShoppingListInfo():ShoppingListItem{
//    return ShoppingListItem("banana",1,getCurrentDateTime(),null)
//}
//fun getDummyShoppingList(): Collection<ShoppingListItem>{
//    val item = ShoppingListItem("Apples",5,getCurrentDateTime(), null)
//    val item2 = ShoppingListItem("Oranges",5,getCurrentDateTime(),null )
//    return listOf(item, item2)
//}

fun getCurrentDateTime(): Instant {
    // return something like 2022-11-17T11:56:34.311Z
    val currentMoment: Instant = Clock.System.now()
    return currentMoment
}

fun convertDateTime(currentMoment: Instant?):String  {
        return if(currentMoment==null) {
        "N/A"
    }
    else {
        var day=currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).dayOfMonth.toString()
        var month= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).monthNumber.toString()
        var year= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).year.toString()
        var time= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).time.toString().take(8)
        return "Date: $month-$day-$year Time: $time"}
}
