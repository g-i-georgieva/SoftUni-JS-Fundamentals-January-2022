function reading(numPages, pagesPerHour, totalDays) {
    let totalTimeForReading = numPages / pagesPerHour
    let hoursPerDay = totalTimeForReading / totalDays

    console.log(hoursPerDay)
}
reading(212,
    20,
    2
)