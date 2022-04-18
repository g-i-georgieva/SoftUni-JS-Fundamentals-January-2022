function addSubstract(arr) {
    let sumArr1 = 0;
    let modifiedArray = [];
    let modifiedSum = 0;
    let newArrEl;

    for (let i = 0; i < arr.length; i++) {
        sumArr1 += arr[i];

        if (arr[i] % 2 === 0) {
            newArrEl = arr[i] + i;
            modifiedSum += newArrEl
        } else {
            newArrEl = arr[i] - i;
            modifiedSum += newArrEl
        }

        modifiedArray.push(newArrEl);

    }

    console.log(modifiedArray);
    console.log(sumArr1);
    console.log(modifiedSum);
}
addSubstract([5, 15, 23, 56, 35])