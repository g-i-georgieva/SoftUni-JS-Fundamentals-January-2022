function solve(arr) {
  let text = arr[0];
  let command = arr[1];
  let sum = 0;
  for (let char of text) {
    let code = char.charCodeAt(0);
    if (command == "LOWERCASE") {
      if (code > 96 && code < 123) {
        sum += code;
      }
    } else if (command == "UPPERCASE") {
      if (code > 64 && code < 91) {
        sum += code;
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
