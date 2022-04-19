function nthElement(arr) {
    let last = arr[arr.length - 1];
    let modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % last == 0 && i != arr.length - 1) {
            modifiedArr.push(arr[i]);
        }
    }
    console.log(modifiedArr.join(' '));
}
nthElement(['5', '20', '31', '4', '20', '2'])