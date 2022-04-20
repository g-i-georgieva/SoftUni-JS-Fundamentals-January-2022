function calculator(n1, n2, operator) {
    let sum = 0;
    switch (operator) {
        case "multiply":
            sum = (n1, n2) => n1 * n2;
            break;
        case "divide":
            sum = (n1, n2) => n1 / n2;
            break;
        case "subtract":
            sum = (n1, n2) => n1 - n2;
            break;
        case "add":
            sum = (n1, n2) => n1 + n2;
            break;

    }
    console.log(sum(n1, n2));
}
calculator(5,
    5,
    'multiply'
)