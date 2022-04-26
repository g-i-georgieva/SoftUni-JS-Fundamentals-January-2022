function sumFirstAndLast(numsAsStrings) {
    let first = Number(firstNum(numsAsStrings));
    let last = Number(lastNum(numsAsStrings));

    console.log(first + last)

    function firstNum(arr) {
        return arr.shift()
    }

    function lastNum(arr) {
        return arr.pop()
    }
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])