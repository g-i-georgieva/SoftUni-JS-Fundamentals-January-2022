function solve(arr) {
    let energy = arr[0];
    let commands = arr.slice(1);
    let wins = 0;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'End of battle') {
            return `Won battles: ${wins}. Energy left: ${energy}`;
        }

        let distance = Number(commands[i]);

        if (energy >= distance) {
            wins++;
            energy -= commands[i];

            if (wins % 3 == 0) {
                energy += wins;
            }

        } else {
            return `Not enough energy! Game ends with ${wins} won battles and ${energy} energy`
        }
    }
}
solve(["200", "54", "14", "28", "13", "End of battle"]);