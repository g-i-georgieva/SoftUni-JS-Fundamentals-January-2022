function arrayManipuation(array, commands) {
  for (let input of commands) {
    let token = input.split(" ");
    let command = token[0];

    if (command == "print") {
      console.log(`[ ${array.join(", ")} ]`);
    } else if (command == "add") {
      array.splice(Number(token[1]), 0, token[2]);
    } else if (command == "addMany") {
      let index = Number(token[1]);
      token.splice(0, 2);
      let numToAdd = token.map(Number);
      array.splice(index, 0, ...numToAdd);
    } else if (command == "contains") {
      console.log(`${array.indexOf(Number(token[1]))}`);
    } else if (command == "remove") {
      array.splice(token[1], 1);
    } else if (command == "shift") {
      for (let i = 0; i < Number(token[1]); i++) {
        array.push(array.shift());
      }
    } else if (command == "sumPairs") {
      let newArr = [];

      if (array.length % 2 !== 0) {
        array.push(0);
      }
      for (let i = 0; i < array.length - 1; i += 2) {
        let sum = array[i] + array[i + 1];
        newArr.push(sum);
      }
      array = newArr;
    }
  }
}
arrayManipuation([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arrayManipuation([1, 2, 3, 4, 5],["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);
arrayManipuation([2, 2, 4, 2, 4]["add 1 4", "sumPairs", "print"]);
