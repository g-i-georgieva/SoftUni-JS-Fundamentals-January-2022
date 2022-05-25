function solve(input) {
  let text = input[0]
  let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g
  let count = 0
  let treshold = text.match(/\d/g).map(Number).reduce((a, b) => a * b)
  let emojiArr = []
  console.log(`Cool threshold: ${treshold}`);
  let emojis = text.match(emojiPattern)
  for (let emoji of emojis) {
    count++
    let cleanEmoji = emoji.slice(2, -2)
    let ratingEmoji = 0
    for (let char of cleanEmoji) {
      ratingEmoji += char.charCodeAt()

    }
    if (ratingEmoji > treshold) {
      emojiArr.push(emoji)
    }

  }
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(`${emojiArr.join('\n')}`);
}
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])