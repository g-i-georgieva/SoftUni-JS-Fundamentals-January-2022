function solve(input) {
    let counter = Number(input)
    let sum = 0
    let odd = 1
    let i=1
    while (i <= counter) {
        sum+=odd
        console.log(odd);
        odd+=2
        i++
    }
    console.log(`Sum: ${sum}`)
}
solve(3)