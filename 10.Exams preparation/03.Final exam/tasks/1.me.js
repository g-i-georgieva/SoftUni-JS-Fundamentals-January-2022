function solve(input) {
    let message = input.shift()

    for (let line of input) {
        let [command, par1, par2] = line.split(':|:')

        if (line == 'Reveal') {
            console.log(`You have a new text message: ${message}`)
            break;
        }

        if (command == 'InsertSpace') {
            let left = message.slice(0, +par1)
            let right = message.slice(par1)
            message = left + ' ' + right
            console.log(message)
        } else if (command == 'Reverse') {
            if (message.includes(par1)) {
                let index = message.indexOf(par1)
                let left = message.slice(0, index)
                let right = message.slice(index + par1.length)
                let text = message.substring(index, index + par1.length).split('').reverse().join('')
                message = left + right + text
                console.log(message)
            } else {
                console.log(`error`)
            }
        } else if (command == 'ChangeAll') {
            message = message.split(par1).join(par2)
            console.log(message)
        }
    }
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)  