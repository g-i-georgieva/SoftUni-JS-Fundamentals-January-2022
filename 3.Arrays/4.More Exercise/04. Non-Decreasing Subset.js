function nonDecreasing(array) {
    let newArr = [];
    let maxNum = array[0]
    newArr.push(maxNum)
    for (let i = 1; i < array.length; i++) {
        let nextNum = array[i];
        if (nextNum < maxNum) {
            continue;
        } else {
            maxNum = nextNum
            newArr.push(nextNum);
        }
    }
    console.log(newArr.join(" "));
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24])