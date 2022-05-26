function solve(input) {
  let pirateShipStatus = input.shift().split(">").map(Number);
  let warShipStatus = input.shift().split(">").map(Number);
  let maxHealthCapacity = Number(input.shift());
  let pirateShipSum = 0;
  let warshipSum = 0;
  let isAlive = true;

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" ");
    let command = tokens[0];

    if (command == "Retire" && isAlive == true) {
      for (let el of pirateShipStatus) {
        pirateShipSum += el;
      }
      for (let el of warShipStatus) {
        warshipSum += el;
      }
      console.log(`Pirate ship status: ${pirateShipSum}`);
      console.log(`Warship status: ${warshipSum}`);
      break;
    } else if (command == "Fire") {
      let index = Number(tokens[1]);
      let damage = Number(tokens[2]);
      if (index >= 0 && index < warShipStatus.length) {
        warShipStatus[index] -= damage;
        if (warShipStatus[index] <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          isAlive = false;
          break;
        }
      }
    } else if (command == "Defend") {
      let start = Number(tokens[1]);
      let end = Number(tokens[2]);
      let damage = Number(tokens[3]);
      let isSunk = false;
      if (
        start >= 0 &&
        start < pirateShipStatus.length &&
        end > 0 &&
        end < pirateShipStatus.length
      ) {
        for (let j = start; j <= end; j++) {
          pirateShipStatus[j] -= damage;
          if (pirateShipStatus[j] <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            isAlive = false;
            break;
          }
        }
      }
    } else if (command == "Repair") {
      let index = Number(tokens[1]);
      let health = Number(tokens[2]);
      if (index >= 0 && index < pirateShipStatus.length) {
        pirateShipStatus[index] += health;
        if (pirateShipStatus[index] > maxHealthCapacity) {
          pirateShipStatus[index] = maxHealthCapacity;
        }
      }
    } else if (command == "Status" && isAlive == true) {
      let count = 0;
      for (let el of pirateShipStatus) {
        if (el < maxHealthCapacity * 0.2) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }
  }
}

solve([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
