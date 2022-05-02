function arrayManipuation(array, commands) {
  for (let input of commands) {
    let token = input.split(" ");
    let command = token[0];

    if (command == "print") {
      console.log(`[ ${array.join(", ")} ]`);
    } else if (command == "add") {
      array.splice(Number(token[1]), 0, token[2]);
    } else if (command == "addMany") {
      let index = token[1];
      let newArray = token.slice(2);
      array.splice(index, 0, ...newArray);
    } else if (command == "contains") {
      console.log(`${array.indexOf(Number(token[1]))}`);
    } else if (command == "remove") {
      array.splice(token[1], 1);
    } else if (command == "shift") {
      for (let i = 0; i < Number(token[1]); i++) {
        array.push(array.shift());
      }
    } else if (command == "sumPairs") {
      
      let newArr= []

      if (array.length % 2 === 0) {
        for (let k = 0; k < array.length; k += 2) {
          newArr.push(array[k] + array[k + 1]);
        }
      } else {
        for (let k = 0; k < array.length-1; k += 2) {
          newArr.push(array[k] + array[k + 1]);
        }
        newArr.push(array.pop());
      }
      array.splice(0, array.length, newArr)
    }
  }
}
arrayManipuation([1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3', 'print']  
);
arrayManipuation([1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
  )
