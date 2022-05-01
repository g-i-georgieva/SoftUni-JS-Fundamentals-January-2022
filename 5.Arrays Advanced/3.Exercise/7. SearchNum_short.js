function solve(arr, operations) {
  let [take, deleteFromTake, searchInResult] = operations;
  let myArr = arr.slice(0, take);
  myArr.splice(0, deleteFromTake);
  console.log(
    `Number ${searchInResult} occurs ${
      myArr.filter((e) => e == searchInResult).length
    } times.`
  );
}

solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);
