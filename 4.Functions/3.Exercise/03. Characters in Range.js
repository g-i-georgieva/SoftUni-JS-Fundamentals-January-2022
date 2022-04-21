function charactersInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
    let endChar = Math.max(char2.charCodeAt(0), char1.charCodeAt(0))

    let charInRangeArray = []

    for (let i = startChar + 1; i < endChar; i++) {
        charInRangeArray.push(String.fromCharCode(i))
    }
    console.log(charInRangeArray.join(" "))
}
charactersInRange("a", "d")
charactersInRange('#', ':')