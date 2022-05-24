function solve(input) {
  let targets = input.shift().split(" ").map(Number);

  for (let commands of input) {
    let tokens = commands.split(" ");
    let command = tokens[0];
    let index1 = Number(tokens[1])
    let value = Number(tokens[2]);

    if (command == "End") {
      console.log(targets.join("|"));
    }
    if (command == "Shoot") {
      if (index1 >= 0 && index1 < targets.length) {
        targets[index1] -= value;
        if (targets[index1] <= 0) {
          targets.splice(index1, 1);
        }
      }
    } else if (command == "Add") {
      if (index1 >= 0 && index1 < targets.length) {
        targets.splice(index1 + 1, 0, value);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (command == "Strike") {
      let start = index1 - value;
      let end = index1 + value;
      if (index1 >= 0 && index1 < targets.length) {
        if (start >= 0 && end < targets.length) {
          targets.splice(start, value * 2 + 1);
        }else{
            console.log(`Strike missed!`)
        }
      }
    }
  }
}
solve(["1 2 3 4 5",
"Strike 0 1",
"End"])

