function solve(group, type, day) {
    let price = 0;
    if (type === 'Students') {
        switch (day) {
            case "Friday":
                price = 8.45
                break;
            case "Saturday":
                price = 9.8
                break;
            case "Sunday":
                price = 10.46
                break;
        }
    } else if (type === "Business") {
        switch (day) {
            case "Friday":
                price = 10.90
                break;
            case "Saturday":
                price = 15.60
                break;
            case "Sunday":
                price = 16
                break;
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday":
                price = 15
                break;
            case "Saturday":
                price = 20
                break;
            case "Sunday":
                price = 22.50
                break;
        }
    }

    let totalPrice = price * group

    if (type === "Students" && group >= 30) {
        totalPrice = totalPrice * 0.85
    }

    if (type === "Business" && group >= 100) {
        totalPrice = totalPrice - (10 * price)
    }
    if (type === "Regular" && group >= 10 && group <= 20) {
        totalPrice = totalPrice * 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday"
)