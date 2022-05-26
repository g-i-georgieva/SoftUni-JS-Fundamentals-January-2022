function solve(input) {
  let initialLoot = input.shift().split("|");

  let isOutOfArray = false;

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" ");
    let command = tokens[0];

    if (command == "Yohoho!") {
      break;
    } else if (command == "Loot") {
      let [command, ...indexes] = tokens;
      for (let j = 0; j < indexes.length; j++) {
        if (!initialLoot.includes(indexes[j])) {
          initialLoot.unshift(indexes[j]);
        }
      }
    } else if (command == "Drop") {
      let index = Number(tokens[1]);
      if (index < initialLoot.length - 1 && index >= 0) {
        // initialLoot.push((initialLoot.splice(index,1)).join())
        let moveItem = initialLoot[index];
        initialLoot.splice(index, 1);
        initialLoot.push(moveItem);
      }
    } else if (command == "Steal") {
      let index = Number(tokens[1]);
      if (index <= initialLoot.length - 1) {
        // let stolenItems = initialLoot.splice(initialLoot.length - index, index);
        let stolenItems = initialLoot.splice(-index,index)
        console.log(stolenItems.join(", "));
      } else {
        isOutOfArray = true;
      }
    }
  }

  if (isOutOfArray == true) {
    console.log(initialLoot.join(", "));
    console.log(`Failed treasure hunt.`);
  } else {
    let count = 0;
    let sum = 0;
    for (let el of initialLoot) {
      count++;
      sum += el.length;
    }
    console.log(
      `Average treasure gain: ${(sum / count).toFixed(2)} pirate credits.`
    );
  }
}
solve([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
solve([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
