function sorting(array) {
  let sortedNums = [];
  let length = Number(array.length);

  for (let i = 0; i < length; i++) {
    let number = array[i];

    if (i % 2 === 0) {
      number = Math.max(...array);
    } else {
      number = Math.min(...array);
    }
    array.splice(array.indexOf(number), 1);
    sortedNums.push(number);
  }
  console.log(sortedNums.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
