function solve(num, precision) {
    let a = Number(num);
    let b = Number(precision);
    if (b > 15) {
        b = 15
    }
    num = num.toFixed(b)
    console.log(parseFloat(num))
}
solve(3.1415926535897932384626433832795, 2)