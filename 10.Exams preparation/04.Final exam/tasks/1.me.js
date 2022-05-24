function solve(input) {
    let password = input.shift()

    for (let line of input) {
        let [command, par1, par2] = line.split(' ')

        if(line=='Done'){
            console.log(`Your password is: ${password}`);
            break;
        }
        if (command == 'TakeOdd') {
            let text = password.split('')
            let arr = []
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    arr.push(text[i])
                }

            }
            password = arr.join('')
            console.log(password);
        } else if (command == 'Cut') {
            let left = password.substring(0,+par1)
            let rigth = password.substring(+par1+Number(par2))
            password = left+rigth
            console.log(password)
        } else if (command == 'Substitute') {
            if(password.includes(par1)){
                password=password.split(par1).join(par2)
                console.log(password);
            }else{
                console.log(`Nothing to replace!`)
            }
        }
    }
}
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

