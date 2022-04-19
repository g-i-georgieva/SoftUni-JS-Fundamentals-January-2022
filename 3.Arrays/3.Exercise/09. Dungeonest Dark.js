function dungeonestDark(arr) {
    let rooms = arr.toString().split("|");
    let initialHealth = 100;
    let initialCoins = 0;
    let roomsCount = 0;
    for (const room of rooms) {
        roomsCount++;
        let roomArr = room.split(" ");
        let itemMonster = roomArr[0];
        let value = Number(roomArr[1]);
        if (itemMonster === "potion") {
            let gainedEnergy = Math.min(value, 100 - initialHealth);
            initialHealth += value;
            if (initialHealth > 100) {
                initialHealth = 100;
            }
            console.log(`You healed for ${gainedEnergy} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (itemMonster == "chest") {
            initialCoins += value;
            console.log(`You found ${value} coins.`);
        } else {
            if (initialHealth > value) {
                initialHealth -= value;
                console.log(`You slayed ${itemMonster}.`);
            } else {
                initialHealth -= value;
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${roomsCount}`);
                break;
            }
        }
    }
    if (initialHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])