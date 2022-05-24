function movingTarget(arrInput) {
    let commands = arrInput.slice();
    let targets = commands.shift().split(' ').map(Number);
    let currentCommands = commands.shift();
 
    let shoot = (indexInput, powerInput) => {
        let index = Number(indexInput);
        let power = Number(powerInput);
 
        if (index < targets.length) {
            targets[index] -= power;
        }
 
        if (targets[index] <= 0) {
            targets.splice(index, 1)
        }
 
        return targets;
    }
 
    let add = (indexInput, valueInput) => {
        let index = Number(indexInput);
        let value = Number(valueInput);

        if (index < targets.length && index >= 0) {
            targets.splice(index, 0, value);
        } else {
            console.log('Invalid placement!');
        }

        return targets;
    }
 
    let strike = (indexInput, radiusInput) => {
        let index = Number(indexInput);
        let radius = Number(radiusInput);
        let startIndex = index - radius;
        let endIndex = index + radius;
        let targetsRemove = radius + radius + 1;
 
        if (startIndex >= 0 && endIndex < targets.length) {
            targets.splice(startIndex, targetsRemove);
        } else {
            console.log('Strike missed!');
        }
 
        return targets;
    }
 
    while (currentCommands != 'End') {
        let [command, index, number] = currentCommands.split(' ');
 
        if (command == 'Shoot') {
            targets = shoot(index, number);
        } else if (command == 'Add') {
            targets = add(index, number);
        } else if (command == 'Strike') {
            targets = strike(index, number);
        }
 
        currentCommands = commands.shift();
    }
console.log();


    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
;