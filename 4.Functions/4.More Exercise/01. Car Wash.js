function carWash(commandsArray) {
    let currentCarCondition = 0;
    for (let index = 0; index < commandsArray.length; index++) {
        switch (commandsArray[index]) {
            case "soap":
                currentCarCondition += 10;
                break;
            case "vacuum cleaner":
                currentCarCondition += 0.25 * currentCarCondition;
                break;
            case "mud":
                currentCarCondition -= 0.1 * currentCarCondition;
                break;
            case "water":
                currentCarCondition += 0.2 * currentCarCondition;
                break;
            default:
                break;
        }
    }
    console.log(`The car is ${currentCarCondition.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);