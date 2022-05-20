function solve(input) {
    let text = input[0]
    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})/g
    let match = pattern.exec(text)
    
    let totalCal = 0
    let foodInfo = []

    while (match!==null) {
        console.log(match);
        let name = match.groups["name"];
        let date = match.groups["date"];
        let cal = Number(match.groups["calories"]);
        totalCal += cal;

        foodInfo.push({name, date, cal})

        match = pattern.exec(text)
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`)

    for (const el of foodInfo) {
        console.log(`Item: ${el.name}, Best before: ${el.date}, Nutrition: ${el.cal}`);
    }
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)