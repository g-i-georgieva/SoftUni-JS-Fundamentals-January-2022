function plantDiscovery(arrOfPlants) {
    let n = arrOfPlants.shift();
    let obj = {};
    for (let i = 0; i < n; i++) {
        let data = arrOfPlants[i].split('<->');
        let [name, rare] = [data[0], Number(data[1])];
        obj[name] = { 'rare': Number(rare), rate: 0, avrg: 0 };
    }
    while (n !== 0) {
        n--;
        arrOfPlants.shift();
        // console.log(arrOfPlants);
    }

    for (let line of arrOfPlants) {
        if (line !== 'Exhibition') {
            let commands = line.split(': ');
            let command = commands[0];
            let [plant, p1] = commands[1].split(' - ');

            if (obj.hasOwnProperty(plant)) {
                if (command === 'Rate') {
                    obj[plant].rate += Number(p1);
                    obj[plant].avrg++;

                } else if (command === 'Update') {
                    obj[plant].rare = Number(p1);

                } else if (command === 'Reset') {
                    obj[plant].rate = 0;
                    obj[plant].avrg = 0;
                }

            } else {
                console.log('error');
            }
        }
    }
    console.log(`Plants for the exhibition:`);

    for (let [plant, info] of Object.entries(obj)) {
        if (info.rate !== 0) {
            console.log(`- ${plant}; Rarity: ${(info.rare)}; Rating: ${(info.rate/info.avrg).toFixed(2)}`);        
        } else {
            console.log(`- ${plant}; Rarity: ${(info.rare)}; Rating: ${(0).toFixed(2)}`);
        }
   }
}

demo(["1",
    "Arnoldii<->4",
    "Rate: Arnoldii - 3",
    "Reset: Arnoldii",
    "Exhibition"])