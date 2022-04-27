function fibonacci(n, k) {
    let result = [1]

    for (let i = 1; i < n; i++) { //for (let i = 0; i < n-1; i++) {
        let elements = result.slice(-k)
        let current = 0

        for (let num of elements) {
            current += num
        }


        result.push(current)

    }

    console.log(result.join(" "));
}
fibonacci(6, 3)
fibonacci(8, 2)