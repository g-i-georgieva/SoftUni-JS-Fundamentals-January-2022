function houseParty(arr) {
    let listOfGuests = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(',');

        for (let el of tokens) {
            let command = tokens.toString().split(' ');
            let name = command[0];
            let attendance = command[2];

            if (attendance === 'going!') {
                if (!listOfGuests.includes(name)) {
                    listOfGuests.push(name);
                } else {
                    console.log(`${name} is already in the list!`)
                }

            } else if (attendance === 'not') {
                if (listOfGuests.includes(name)) {
                    listOfGuests.splice(listOfGuests.indexOf(name), 1)
                } else {
                    console.log(`${name} is not in the list!`);
                }
            }
        }
    }
    console.log(`${listOfGuests.join('\n')}`);
}
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);