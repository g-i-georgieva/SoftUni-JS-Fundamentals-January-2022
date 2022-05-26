function solve(input) {
  let health = 100;
  let coins = 0;
  let isAlive = true;
  let rooms = input.split("|");
  let count = 0;

  for (let i = 0; i < rooms.length; i++) {
    count++;
    let room = rooms[i].split(" ");
    let command = room[0];
    let value = Number(room[1]);

    if (command == "potion") {
      if (health + value > 100) {
        value = 100 - health;
        health = 100;
      } else {
        health += value;
      }
      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == "chest") {
      coins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.\nBest room: ${count}`);
        isAlive = false;
        break;
      }
    }
  }
  if (isAlive) {
    console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
  }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
