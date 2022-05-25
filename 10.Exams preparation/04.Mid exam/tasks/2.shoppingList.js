function solve(input) {
  let list = input.shift().split("!");

  for (let i = 0; i < input.length; i++) {
    let commands = input[i];
    let tokens = commands.split(" ");
    let command = tokens[0];
    let item = tokens[1];

    if (command == "Go") {
      console.log(list.join(", "));
    } else if (command == "Urgent") {
      if (!list.includes(item)) {
        list.unshift(item);
      }
    } else if (command == "Unnecessary") {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
      }
    } else if (command == "Correct") {
      let [command, oldItem, newItem] = tokens

      if (list.includes(oldItem)) {
        list.splice(list.indexOf(oldItem), 1, newItem)
      }
    } else if (command == "Rearrange") {
      if (list.includes(item)) {
        list.push(list.splice(list.indexOf(item), 1)[0]);
        // initialLoot.push((initialLoot.splice(index,1)).join())
        // list = newArr;
      }
    }
  }
}
solve(["Milk!Pepper!Salt!Water!Banana",
"Rearrange Pepper",
"Go Shopping!"])

