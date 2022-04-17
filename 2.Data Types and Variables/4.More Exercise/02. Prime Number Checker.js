function primeNumberChecker(num) {
    let check = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(true);
    } else {
        console.log(false);
    }
}
primeNumberChecker (81)