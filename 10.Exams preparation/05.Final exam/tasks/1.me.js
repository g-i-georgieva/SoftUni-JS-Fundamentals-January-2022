function solve(input) {
    let activationKey = input.shift()

    for (let line of input) {
        let [commans, par1, par2, par3] = line.split('|')

        if (line == 'Generate') {
            console.log(`Your activation key is: ${activationKey}`);
            break;
        }

        if (commans == 'Contains') {
            if (activationKey.includes(par1)) {
                console.log(`${activationKey} contains ${par1}`)
            } else {
                console.log(`Substring not found!`)
            }
        } else if (commans == 'Flip') {
            let left = activationKey.slice(0, +par2)
            let right = activationKey.slice(Number(par3))
            let text = activationKey.slice(+par2, +par3)
            if (par1 == 'Upper') {
                activationKey = left + text.toUpperCase() + right
            } else if (par1 == 'Lower') {
                activationKey = left + text.toLowerCase() + right
            }
            console.log(activationKey);
        } else if (commans == 'Slice') {
            let left = activationKey.slice(0, +par1)
            let right = activationKey.slice(Number(par2))
            activationKey = left + right
            console.log(activationKey);
        }
    }
}
solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])

