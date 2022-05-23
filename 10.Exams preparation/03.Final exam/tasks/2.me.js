function solve(input) {
    let pattern = /(\#|@)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
    let match = pattern.exec(input)
    let pairsCount = 0
    let arr = []
    let arwMirror = false

    while (match !== null) {
        pairsCount++
        let firstWord = match.groups['word1']
        let secondWord = match.groups['word2']
        let reversed = secondWord.split('').reverse().join('')
        if (firstWord == reversed) {
            arwMirror=true
            arr.push(`${firstWord} <=> ${secondWord}`)
        }
        match = pattern.exec(input)
    }
    if (pairsCount > 0) {
        console.log(`${pairsCount} word pairs found!`);
        if (arwMirror) {
            console.log(`The mirror words are:`) 
            console.log(arr.join(', '));
        }else{
            console.log(`No mirror words!`);
        }
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)