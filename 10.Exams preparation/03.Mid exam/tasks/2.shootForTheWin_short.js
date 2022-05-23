function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number)
    let command = input.shift
    let count=0
    while (command !== "End") {
        let indexOfTheTarget = Number(command);
        if (indexOfTheTarget >= 0 && indexOfTheTarget < targets.length) {
        for (let i = 0; i < targets.length; i++) {
            let currentTarger = targets[indexOfTheTarget];
            if (i !== indexOfTheTarget && targets[i] !== -1) {
                if (targets[i] > currentTarger) {
                    targets[i] -= currentTarger;
                } else {
                    targets[i] += currentTarger;
                }
            }
        }
        targets[indexOfTheTarget] = -1;
        count++;
    }

    command = input.shift();
}

console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}