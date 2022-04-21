function signCheck(num1, num2, num3) {

    let negativeCount = 0;
    let arr = [num1, num2, num3];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num < 0) {
            negativeCount++;
        } else {
            continue;
        }
    }
    if (negativeCount % 2 == 0) {
        console.log(`Positive`);
    } else {
        console.log('Negative');
    }
}
signCheck(5,
    12,
    -15
)