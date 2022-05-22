function arrayModify(input) {
  let array = input.shift().split(" ").map(Number);

  while (input[0] !== "End") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let index1 = tokens[1];
    let index2= tokens[2]

    if (command==)

    console.log(command);
  }
}
arrayModify([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
