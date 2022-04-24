function modification(number) {
    let numberAsString = number.toString()
    let avarageSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        avarageSum += Number(numberAsString[i]);

    }
    avarageSum /= numberAsString.length;

    while (avarageSum < 5) {

        for (let i = 0; i < numberAsString.length; i++) {

            avarageSum += Number(numberAsString[i]);

        }
        avarageSum /= numberAsString.length;

        numberAsString += 9;

    }
    console.log(numberAsString);
}
modification(101)