function solve(numbers) {
  let big = numbers.sort((a, b) => b - a).slice(0, numbers.length / 2);
  let small = numbers.slice(numbers.length / 2).reverse();

  let result = [];
  for (let i = 0; i < big.length; i++) {
    result.push(big[i], small[i]);
  }
  console.log(result.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
