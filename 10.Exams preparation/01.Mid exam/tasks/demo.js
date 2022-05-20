function solve(input) {
  let sequenceArray = input.shift().split(' ');
  let index = 0;

  let turns = 0;

  let command = input[index++];

  while (command != 'end') {
      let commandFirstIndex = Number(command.split(' ')[0]);
      let commandSecondIndex = Number(command.split(' ')[1]);

      let firstMatchingElIndex = Math.min(commandFirstIndex, commandSecondIndex);
      let secondMatchingElIndex = Math.max(commandFirstIndex, commandSecondIndex);

      if ((firstMatchingElIndex < 0 || secondMatchingElIndex < 0) || secondMatchingElIndex === firstMatchingElIndex) {
          console.log("Invalid input! Adding additional elements to the board");
          turns++;

          let elementToAdd = `-${turns}a`;
          let middlePartIndex = Math.floor(sequenceArray.length / 2) - 1;
          sequenceArray.splice(middlePartIndex + 1, 0, elementToAdd, elementToAdd);

          command = input[index++];
          continue;
      }

      if (sequenceArray[firstMatchingElIndex] === sequenceArray[secondMatchingElIndex]) {
          console.log(`Congrats! You have found matching elements - ${sequenceArray[firstMatchingElIndex]}!`);
          sequenceArray.splice(secondMatchingElIndex, 1);
          sequenceArray.splice(firstMatchingElIndex, 1);
          turns++;
      } else {
          console.log("Try again!");
          turns++;
      }

      if (sequenceArray.length == 0) {
          console.log(`You have won in ${turns} turns!`);
          break;
      }

      command = input[index++];
  }

  if (command === 'end' && sequenceArray.length > 0) {
      console.log("Sorry you lose :(");
      console.log(sequenceArray.join(' '));
  }
}
solve(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
solve([
  "a 2 4 a 2 4", 
  "4 0", 
  "0 2",
  "0 1",
  "0 1", 
  "end"
  ]
  )
