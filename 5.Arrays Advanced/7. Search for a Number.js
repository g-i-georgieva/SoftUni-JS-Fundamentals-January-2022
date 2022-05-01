function solve(arr, operations) {
  let [numsToTake, numsToDelete, numToSearch] = operations;

  let newArr = arr.slice(0, numsToTake)
    newArr.splice(0, numsToDelete);
  let count = 0;
  for (let el of newArr) {
    if (el === numToSearch) {
      count++;
    }
  }

  console.log(`Number ${numToSearch} occurs ${count} times.`);
}

solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )