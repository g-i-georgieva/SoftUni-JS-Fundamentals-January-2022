function alphabet(n) {
    let num = Number(n)
    for (let i = 97; i < 97 + num; i++) {
        let firstLetter = String.fromCharCode(i);
        for (let j = 97; j < 97 + num; j++) {
            let secondLetter = String.fromCharCode(j);
            for (let k = 97; k < 97 + num; k++) {
                let thirdLetter = String.fromCharCode(k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
alphabet(2)