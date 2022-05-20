function lift(arr) {

    let people = Number(arr.shift())
    let liftState = arr[0].split(" ").map(Number)

    for (let i = 0; i < liftState.length; i++) {

        if (people > 0) {
            if (liftState[i] <= 4) {
                if (people - (4 - liftState[i]) >= 0) {
                    people -= (4 - liftState[i])
                    liftState[i] += (4 - liftState[i])

                } else {
                    liftState[i] += people;
                    people -= people;
                }
            }

        } else {
            break;
        }
    }
    if (people > 0) {

        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(liftState.join(" "));
    } else if (liftState.some(Element => Element !== 4)) {
        console.log("The lift has empty spots!");
        console.log(liftState.join(" "));
    } else {
        console.log(liftState.join(" "));
    }

}

lift(["16", "0 0 0 0"]);