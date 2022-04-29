function districtArray(array) {
  let myArr = []
  for (let i = 0; i < array.length; i++) {
    let currElement = array[i];

    if (!myArr.includes(currElement)){
      myArr.push(currElement)
    }
  }

  console.log(myArr.join(" "));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
