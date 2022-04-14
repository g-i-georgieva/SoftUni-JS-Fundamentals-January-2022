function amazingNumbers(number) {
    let newNum = String(number)
    let result = 0

    for (let i = 0; i < newNum.length; i++) {
        result += Number(newNum[i])
    }
    let newResult = String(result);

    let special = false
    for (let y = 0; y < newResult.length; y++) {
        if (newResult[y] == '9') {
            special = true
        }
    }

    console.log(`${number} Amazing? ${special ? 'True' : 'False'}`)
}

amazingNumbers(999);
amazingNumbers(9);