function mergeArray(arr1, arr2) {
    let mergerdArr = [];
    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 == 0) {
            mergerdArr.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            mergerdArr.push(arr1[i] + arr2[i])
        }
    }
    console.log(mergerdArr.join(" - "))
}
mergeArray(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)