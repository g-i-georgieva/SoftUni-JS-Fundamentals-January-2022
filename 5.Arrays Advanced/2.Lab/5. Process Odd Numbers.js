// function oddNumbers(arrayInput) {
// let filtered = arr.filter((x, i) => i % 2 == 1);

// let doubled = filtered.map((x) => x * 2);

// let result = doubled.reverse()

// console.log(result.join(" "))
// второ реешение:
//   console.log(
//     arrayInput
//     .filter((x, i) => i % 2 == 1)
//     .map((x) => x * 2)
//     .reverse()
//     .join(" ")
//     );
// }
// oddNumbers([10, 15, 20, 25]);

//
arrayInput => arrayInput
  .filter((x, i) => i % 2 == 1)
  .map((x) => x * 2)
  .reverse()
  .join(" ");