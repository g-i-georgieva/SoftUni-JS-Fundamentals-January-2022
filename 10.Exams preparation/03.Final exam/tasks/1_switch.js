function solve(input) {
    let message = input.shift()

    let line = input.shift()

    while (line !== 'Reveal') {
        let [command, firstArg, secondArg] = line.split(':|:')
        let hasError = false
        switch (command) {
            case 'InsertSpace':
                let index = Number(firstArg)
                message = message.substring(0, index) + ' ' + message.substring(index)
                break;
            case 'Reverse':
                if (message.includes(firstArg)) {
                    message = message.replace(firstArg, '')
                    let reversedString = firstArg.split('').reverse().join('')
                    message += reversedString
                } else {
                    console.log('error')
                    hasError = true
                }
                break;
            case 'ChangeAll':
                message = message.split(firstArg)
                message = message.join(secondArg)
                break;
        }
        if(!hasError){
            console.log(message);
        }
      
        line = input.shift()
    }
    console.log(`You have a new text message: ${message}`)
}
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