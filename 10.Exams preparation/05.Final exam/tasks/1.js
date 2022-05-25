function solve(input) {
    let activationKey = input.shift()

    for (let line of input) {
        let tokens = line.split('>>>')

        if (tokens[0] == 'Generate') {
            console.log(`Your activation key is: ${activationKey}`)
            break;
        }
        if (tokens[0] == 'Contains') {
            if (activationKey.includes(tokens[1])){
                console.log(`${activationKey} contains ${tokens[1]}`)
            }else{
                console.log(`Substring not found!`)
            }
        } else if (tokens[0] == 'Flip') {
            let left = activationKey.slice(0, +tokens[2])
            let right = activationKey.slice(+tokens[3])
            let text = activationKey.slice(+tokens[2], tokens[3])          
            if (tokens[1]=='Upper'){
                activationKey =left+text.toUpperCase()+right
            }else if (tokens[1]=='Lower'){
                activationKey =left+text.toLowerCase()+right
            }
            console.log(activationKey)
        } else if (tokens[0] == 'Slice'){
            let left = activationKey.slice(0, +tokens[1])
            let right = activationKey.slice(+tokens[2])
            activationKey=left+right
            console.log(activationKey)
        }
    }
}
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

