function topInteger(array) {

    let topInteger = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let neighbourNumber = array[j];

            if (neighbourNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop == true) {
            topInteger.push(currentNumber);
        }
    }
    console.log(topInteger.join(' '));

}
topInteger([27, 19, 42, 2, 13, 45, 48])