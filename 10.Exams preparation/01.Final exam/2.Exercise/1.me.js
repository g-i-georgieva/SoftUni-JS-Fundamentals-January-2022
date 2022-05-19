function solve(input) {
    let message = input.shift()
    for (let line of input) {
        let [command, par1, par2] = line.split('|')
        if (line == 'Decode') {
            console.log(`The decrypted message is: ${message}`)
            break;
        }
        if (command == 'Move') {
            let moveStr = message.slice(0, +par1)
            let rest = message.slice(+par1)
            message = rest + moveStr
        } else if (command == 'Insert') {
            let left = message.slice(0, +par1)
            let rest = message.slice(+par1)
            message = left + par2 + rest
        } else if (command == 'ChangeAll') {
            message = message.split(par1).join(par2)
        }
    }
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])
