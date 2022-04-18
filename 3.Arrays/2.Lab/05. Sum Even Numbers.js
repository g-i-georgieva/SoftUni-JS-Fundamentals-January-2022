function sumOfEvenNums(arr) {
    let sum = 0;
    for (nums of arr) {
        if (nums % 2 == 0) {
            sum += Number(nums)
        }
    }
    console.log(sum)
}
sumOfEvenNums(['1', '2', '3', '4', '5', '6'])