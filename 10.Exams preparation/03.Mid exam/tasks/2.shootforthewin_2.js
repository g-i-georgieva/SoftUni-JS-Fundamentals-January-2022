function solve(input) {
  let targets = input.shift().split(" ").map(Number);
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == "End") {
      console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
    }

    let currIndex = Number(input[i]);
    if (currIndex >= 0 && currIndex < targets.length) {
      for (let j = 0; j < targets.length; j++) {
        if (currIndex !== j && targets[j] !== -1) {
          if (targets[j] > targets[currIndex]) {
            targets[j] -= targets[currIndex];
          } else {
            targets[j] += targets[currIndex];
          }
        }
        
      }
      targets[currIndex] = -1;
      count++;
    }
  }
}
solve(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
