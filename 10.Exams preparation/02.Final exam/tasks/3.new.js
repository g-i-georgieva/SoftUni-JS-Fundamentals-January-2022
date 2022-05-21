function plantDiscovery(input) {
    let plants = input.shift()
    let list = {};

    for (let i = 0; i < plants; i++) {
        let [plant, rarity] = input[i].split('<->')

        list[plant] = {
            'rarity': +rarity,
            'rating': 0,
            'counter': 0,
        }
    }

    for (let i = plants; i < input.length; i++) {
        if (input[i] === 'Exhibition') break;
        let [command, token] = input[i].split(': ')
        let [plant, rating] = token.split(' - ')
        if (!list.hasOwnProperty(plant)) {
            console.log('error')
        } else {
            if (command === 'Rate') {
                let before = list[plant]['rating'] + +rating
                list[plant]['rating'] = before
                list[plant]['counter']++
            } else if (command === 'Update') {
                list[plant]['rarity'] = +rating
            } else if (command === 'Reset') {
                list[plant]['rating'] = 0;
            }
        }
    }

    console.log(`Plants for the exhibition:`)

    for (let el of list) {
        let num = 0
        if (list[el]['counter'] > 1) {
            num = list[el]['rating'] / list[el]['counter']
        } else {
            num = list[el]['rating']
        }
        console.log(`- ${el}; Rarity: ${list[el]['rarity']}; Rating: ${num.toFixed(2)}`)
    }

}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 0",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
