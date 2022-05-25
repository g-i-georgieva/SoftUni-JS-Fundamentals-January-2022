function solve([input]) {
  //   let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
  //   let matchEmoji = emojiPattern.exec(input);
  let count = 0;
  let teshold = input
    .match(/\d/g)
    .map(Number)
    .reduce((a, b) => a * b);

  console.log(`Cool threshold: ${teshold}`);

  let emojis = input.match(/(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g);
  let coolEmoji = [];
  for (let emoji of emojis) {
    count++;
    let asciSum = emoji
      .slice(2, -2)
      .split("")
      .map((x) => x.charCodeAt(0))
      .reduce((a, b) => a + b);

    if (asciSum >= teshold) {
      coolEmoji.push(emoji);
    }
  }
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(coolEmoji.join("\n"));
}

solve([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! :Joy:: *Banana** :Wink:: *Vali** :valid_emoji::",
]);

