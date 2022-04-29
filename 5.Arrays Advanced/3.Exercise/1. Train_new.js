function solve(array) {
  let train = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (let commands of array) {
    let tokens = commands.split(" ");

    if (tokens[0] === "Add") {
      train.push(tokens[1]);
    } else {
      tokens[0] = Number(tokens[0]);

      for (let i = 0; i < train.length; i++) {
        if (train[i] + tokens[0] <= maxCapacity) {
          train[i] += tokens[0];
          break;
        }
      }
    }
  }
  console.log(train.join(" "));
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
