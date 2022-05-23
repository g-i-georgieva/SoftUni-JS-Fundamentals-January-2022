function solve(input) {
    let list = {}
    let n = input.shift()

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|')
        mileage = Number(mileage)
        fuel = Number(fuel)
        list[car] = {
            mileage,
            fuel,
        }
    }

    while (input[0] !== 'Stop') {
        let [command, par1, par2, par3] = input.shift().split(' : ')

        if (command == 'Drive') {
            if (list[par1].fuel >= Number(par3)) {
                console.log(`${par1} driven for ${par2} kilometers. ${par3} liters of fuel consumed.`);
                list[par1].mileage += Number(par2)
                list[par1].fuel -= Number(par3)
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (list[par1].mileage >= 100000) {
                console.log(`Time to sell the ${par1}!`);
                delete list[par1]
            }
        } else if (command == "Refuel") {
            let diff = 0
            if (list[par1].fuel + Number(par2) >= 75) {
                diff = 75 - list[par1].fuel
            } else {
                diff = Number(par2)
            }
            console.log(`${par1} refueled with ${diff} liters`)
            list[par1].fuel += Number(diff)
        } else if (command == 'Revert') {
            if (list[par1].mileage - Number(par2) > 10000) {
                console.log(`${par1} mileage decreased by ${par2} kilometers`);
                list[par1].mileage -= Number(par2)
            } else {
                list[par1].mileage = 10000
            }
        }
    }

    for (const car in list) {
        console.log(`${car} -> Mileage: ${list[car].mileage} kms, Fuel in the tank: ${list[car].fuel} lt.`);
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])
  
