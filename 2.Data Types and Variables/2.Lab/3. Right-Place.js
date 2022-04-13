function rightPlace(word, char, match) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            result += char
            continue;
        }
        result += word[i]
    }
    console.log(result === match ? 'Matched' : 'Not Matched')
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');