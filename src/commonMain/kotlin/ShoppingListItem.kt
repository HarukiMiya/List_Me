import kotlinx.serialization.Serializable
import kotlinx.datetime.*

@Serializable
data class ShoppingListItem(val desc: String, val priority: Int) {
    val id: Int = desc.hashCode()
    val  DateTime: String = getCurrentTime()
    companion object {
        const val path = "/shoppingList"
    }
}

public fun getCurrentTime(): String {
    // return something like 2022-11-17T11:56:34.311Z
    val currentMoment: Instant = Clock.System.now()
    // return year-day-month
    val currentDate: LocalDate = currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).date
    // splitting it so get MM.DD.YYYY format
    val day: String = currentDate.dayOfMonth.toString()
    val month: String = currentDate.monthNumber.toString()
    val year: String = currentDate.year.toString()
    // taking hours and min, excluding seconds and nanoseconds
    // 24 hour format
    val currentTime: String = currentMoment.toLocalDateTime(TimeZone.currentSystemDefault()).time.toString().take(5)


    return "$day.$month.$year $currentTime"
    //return currentMoment
}

