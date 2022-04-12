function solve(num) {
    let n = Number(num);
    let maxDiv = Number.MIN_SAFE_INTEGER

    if (num % 2 === 0) {
        maxDiv = 2
    }
    if (num % 3 === 0) {
        maxDiv = 3
    }
    if (num % 6 === 0) {
        maxDiv = 6
    }
    if (num % 7 === 0) {
        maxDiv = 7
    }
    if (num % 10 === 0) {
        maxDiv = 10
    }

    if (n % 2 !== 0 && n % 3 !== 0 && n % 6 !== 0 && n % 10 !== 0) {
        console.log(`Not divisible`)
    } else {
        console.log(`The number is divisible by ${maxDiv}`)
    }
}
solve(1643)