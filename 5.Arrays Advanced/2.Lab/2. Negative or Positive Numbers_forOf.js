function negativeOrPositiveNumbers(nums) {
  let result = [];

  for (let num of nums) {
    num = Number(num);
    num < 0 ? result.unshift(num) : result.push(num);
    // if (num < 0) {
    //     result.unshift(num);
    // } else if (num >= 0) {
    //     result.push(num);
    // }
  }

  // for (const num of result) {
  //     console.log (num)
  // }
  console.log(result.join(`\n`));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
