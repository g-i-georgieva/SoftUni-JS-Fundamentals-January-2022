function rotate(array) {
    let rotation = Number(array[array.length - 1])
    let newArr = []
    for (let i = 0; i < array.length - 1; i++) {
        newArr.push(array[i])
    }
    for (let i = 0; i < rotation; i++) {
        let lastEl = newArr[newArr.length - 1]
        for (let j = newArr.length - 1; j >= 0; j--) {
            newArr[j] = newArr[j - 1];
        }
        newArr[0] = lastEl
    }
    console.log(newArr.join(" "))
}
rotate(['1', '2', '3', '4', '2'])