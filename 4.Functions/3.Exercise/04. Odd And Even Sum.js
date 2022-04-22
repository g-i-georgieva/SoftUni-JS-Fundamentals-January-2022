function oddAndEvenSum(number) {
    let numberAsString = number.toString()

    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            let currNum = Number(numberAsString[i])
            if (currNum % 2 !== 0) {
                oddSum += currNum
            }
        }
        return oddSum;
    }
    function totalEvenSum(numAsString) {
        let evenSum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            let currNum = Number(numberAsString[i])
            if (currNum % 2 === 0) {
                evenSum += currNum
            }
        }
        return evenSum
    }
    console.log(`Odd sum = ${totalOddSum(numberAsString)}, Even sum = ${totalEvenSum(numberAsString)}`)
}
oddAndEvenSum(1000435)