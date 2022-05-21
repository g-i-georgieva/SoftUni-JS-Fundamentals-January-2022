function activationKeys(input) {

    let word = input.shift();

    while (input[0] !== "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];
        if (command === "Flip") {
            let type = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let split = word.slice(startIndex, endIndex);
            let left = word.slice(0, startIndex);
            let right = word.slice(endIndex);

            if (type === "Upper") {
                word = left + split.toUpperCase() + right;
            } else {
                word = left + split.toLowerCase() + right;
            }
            console.log(word)
        } else if (command === "Slice") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let left = word.slice(0, startIndex);
            let right = word.slice(endIndex);
            word = left + right

            console.log(word);

        } else if (command === "Contains") {
            let key = tokens[1];

            if (word.includes(key)) {
                console.log(`${word} contains ${key}.`);
            } else {
                console.log("Substring not found!");
            }
        }
    }
    if (input[0] == 'Generate') {
        console.log(`Your activation key is: ${word}`);
    }


}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
