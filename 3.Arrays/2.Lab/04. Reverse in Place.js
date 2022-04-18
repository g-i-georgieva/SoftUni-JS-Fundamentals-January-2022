function reverse(inputArr) {
    let arr = [];
    let result = "";
    for (let i = inputArr.length - 1; i >= 0; i--) {
        arr.push(inputArr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        result += "" + arr[i];
        result += " ";
    }
    console.log(result);
}
reverse(['33', '123', '0', 'dd'])