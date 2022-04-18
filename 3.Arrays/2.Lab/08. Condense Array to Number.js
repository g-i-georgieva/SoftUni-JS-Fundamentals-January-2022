function condenseArray(arr) {
    let condense = [];
    for (let n of arr) {
        condense.push(n)
    }

    while (condense.length > 1) {
        let temp = [];
        for (let i = 0; i < condense.length - 1; i++) {
            temp.push(condense[i] + condense[i + 1])
        }
        condense = temp
    }
    console.log(condense[0])
}
condenseArray([5, 0, 4, 1, 2])