function solve(input) {
    let n = Number(input.shift())
    let list = {}

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        list[piece] = {
            composer,
            key
        }
    }

    while (input[0] !== 'Stop') {
        let [command, par1, par2, par3] = input.shift().split('|')
        if (command == 'Add') {
            if (list.hasOwnProperty(par1)) {
                console.log(`${par1} is already in the collection!`);
            } else {
                list[par1] = {
                    par2,
                    par3
                }
                console.log(`${par1} by ${par2} in ${par3} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (list.hasOwnProperty(par1)) {
                delete list[par1]
                console.log(`Successfully removed ${par1}!`);
            } else {
                console.log(`Invalid operation! ${par1} does not exist in the collection.`);
            }
        } else if (command = 'ChangeKey') {

            if (list.hasOwnProperty(par1)) {
                list[par1].key = par2
                console.log(`Changed the key of ${par1} to ${par2}!`);
            } else {
                console.log(`Invalid operation! ${par1} does not exist in the collection.`);
            }
        }

    }
    for (let piece in list) {
        console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`)
    }

}
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
)  