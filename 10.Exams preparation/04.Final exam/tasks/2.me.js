function solve(input) {
    let n = Number(input.shift())
    let pattern = /@|\#+(?<barcode>[A-Za-z0-9]{4,}[A-Z])@|\#+/

    for (let i = 0; i < n; i++) {
        let line = input[i]
        let match = pattern.exec(line)
        let prductGroup = ''
        let countDigits = 0
        if (match === null) {
            console.log(`Invalid barcode`);
        } else {
            let word = match.groups['barcode']
            for (let char of word) {
                if (char.charCodeAt() >= 48 && har.charCodeAt() <= 57) {
                    countDigits++
                    prductGroup += char
                }
            }
            if (countDigits==0){
                prductGroup='00'
            }
            console.log(`Product group: ${productGroup}`);
        }

    }

}
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
