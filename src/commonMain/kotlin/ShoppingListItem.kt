import kotlinx.serialization.Serializable
import kotlinx.datetime.*

@Serializable
data class ShoppingListItem(val desc: String, val priority: Int ) {
    val id: Int = desc.hashCode()
    val lastEditTime:Instant=getCurrentDateTime()
    //val  DateTime: String = getCurrentDateTime()
    companion object {
        const val path = "/shoppingList"
    }
}


@Serializable
data class User(val username: String, val password: String) {
    val userId: Int = username.hashCode()

    companion object {
        const val path = "/user"
    }
}

public fun getCurrentDateTime(): Instant {
    // return something like 2022-11-17T11:56:34.311Z
    val currentMoment: Instant = Clock.System.now()
    return currentMoment
//    val currentDateTime: LocalDateTime = currentMoment.toLocalDateTime(TimeZone.UTC)
//    //val currentTime=currentDateTime.toInstant(TimeZone.currentSystemDefault()).toLocalDateTime(TimeZone.currentSystemDefault())
//    return currentDateTime.toString()
}

public fun convertDateTime(currentMoment: Instant):String  {
    // return something like 2022-11-17T11:56:34.311Z
    if(true)
    {
        var day=currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).dayOfMonth.toString()
        var month= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).monthNumber.toString()
        var year= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).year.toString()
        var time= currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).time.toString().take(8)
        return "Date: $month-$day-$year Time: $time"

    }
    else{
        return currentMoment.toLocalDateTime(TimeZone.UTC).toString()
    }
}
