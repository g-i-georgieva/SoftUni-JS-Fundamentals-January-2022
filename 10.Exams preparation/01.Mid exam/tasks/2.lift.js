function solve(array) {
  let people = Number(array[0]);
  let cabins = array[1].split(" ").map(Number);
  let emptySpace = 0;
  let empty = false;
  let onlyWagons = false;

  for (let i = 0; i < cabins.length; i++) {
    if (cabins[i] < 4) {
      emptySpace = 4 - cabins[i];
      if (people - emptySpace > 0) {
        people -= emptySpace;
        cabins[i] = 4;
      } else {
        if (i == cabins.length - 1 && people - emptySpace == 0) {
          cabins[i] += people;
          onlyWagons = true;
        } else {
          cabins[i] += people;
          empty = true;
          break;
        }
      }
    }
  }
  if (onlyWagons == true) {
    console.log(cabins.join(" "));
  } else if (empty == true) {
    console.log(`The lift has empty spots!`);
    console.log(cabins.join(" "));
  } else {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(cabins.join(" "));
  }
}
solve(["16", "0 0 0 0"]);
