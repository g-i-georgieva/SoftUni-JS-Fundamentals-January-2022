function bitcoinMining(arr) {
    let total = 0;
    let firstbuy = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentDay = arr[i] * 67.51;

        if ((i + 1) % 3 === 0) {
            currentDay = currentDay * 0.70
        }
        total += currentDay;
        if (total >= 11949.16 && firstbuy == 0) {
            firstbuy = i + 1;
        }

    }
    console.log(`Bought bitcoins: ${Math.floor(total / 11949.16)}`);
    if (firstbuy > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstbuy}`)
    }
    console.log(`Left money: ${(total % 11949.16).toFixed(2)} lv.`);
}
bitcoinMining([50, 100])