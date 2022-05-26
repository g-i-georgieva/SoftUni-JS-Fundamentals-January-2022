function solve(input) {
  let inventory = input.shift().split(", ");
  let length = input.length;

  for (let i = 0; i < length; i++) {
    let tokens = input[i].split(" - ");
    let command = tokens[0];

    if (command == "Craft") {
      break;
    } else if (command == "Collect") {
      let item = tokens[1];
      if (!inventory.includes(item)) {
        inventory.push(item);
      }
    } else if (command == "Drop") {
      let item = tokens[1];
      if (inventory.includes(item)) {
        inventory.splice(inventory.indexOf(item), 1);
      }
    } else if (command == "Combine Items") {
      let items = tokens[1].split(":");
      let oldItem = items[0];
      let newItem = items[1];
      if (inventory.includes(oldItem)) {
          let indexOld= inventory.indexOf(oldItem)
        inventory.splice(indexOld+1, 0, newItem);
      }
    } else if (command == "Renew") {
      let item = tokens[1];
      if (inventory.includes(item)) {
        inventory.splice(inventory.indexOf(item), 1)
        inventory.push(item)
      }
    }
  }
  console.log(inventory.join(", "));
}
solve([
  "Iron, Sword",
  "Renew - Iron",
  "Craft!",
]);
