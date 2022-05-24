function movingTarget(inputArr) {
    let targetList = inputArr.shift().split(" ").map(Number);
    let commandsLine = inputArr;
    let tokens = commandsLine.shift().split(" ");
   
    while (tokens != "End") {
      let command = tokens[0];
      let indexOfCommand = Number(tokens[1]);
      let commandValue = Number(tokens[2]);
      //  console.log(commandValue);
   
      if (command === "Shoot") {
        for (let index in targetList) {
          if (
            index == indexOfCommand &&
            targetList[indexOfCommand] > commandValue
          ) {
            targetList[indexOfCommand] -= commandValue;
          }
          if (
            index == indexOfCommand &&
            targetList[indexOfCommand] <= commandValue
          ) {
            targetList.splice(indexOfCommand, 1);
          }
        }
      }
   
      if (command == "Add") {
        for (let index = 0; index < targetList.length; index++) {
          if (indexOfCommand >= 0 && indexOfCommand < targetList.length) {
            targetList.splice(indexOfCommand, 0, commandValue);
          } 
        }
        if (indexOfCommand < 0 || indexOfCommand > targetList.length-1 ){
          console.log(`Invalid placement!`);
        }
      }
   
      if (command == "Strike") {
        for (let index in targetList) {
          if (index == indexOfCommand) {
            let startingIndex = indexOfCommand - commandValue;
            let deleteCounter = commandValue * 2 + 1;
            if (0 <= startingIndex && deleteCounter < targetList.length - 1) {
              targetList.splice(startingIndex, deleteCounter);
            } else if (startingIndex < 0 || deleteCounter > targetList.length - 1) {
              console.log(`Strike missed!`); 
            }
          }
        } 
      }
   
      tokens = commandsLine.shift().split(" ");
      if (command == "End") {
        break;
      }
    }
    console.log(targetList.join("|"));
  }
   
  movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
  ]);
   
   movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);