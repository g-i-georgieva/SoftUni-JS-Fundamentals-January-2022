function sorting(array) {
  let sortedNums = [];
  let length = Number(array.length)
  
  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) {
      array.sort((a, b) => b - a);
      let max = array.shift();
      sortedNums.push(max);
    } else {
      array.sort((a, b) => a - b);
      let min = array.shift();
      sortedNums.push(min);
    }
  }
  console.log(sortedNums.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting ([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
