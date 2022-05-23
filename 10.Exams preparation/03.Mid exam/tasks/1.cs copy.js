function counterStrike(arr) {
    let energy = Number(arr.shift());
    let wons = 0;
   
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === "End of battle") {
        console.log(`Won battles: ${wons}. Energy left: ${energy}`);
        break;
      }
      let distance = Number(arr[index]);
   
      if (distance <= energy) {
        wons++;
        energy -= distance;
   
        if (wons % 3 === 0) {
          energy += wons;
        }
      } else {
        console.log(
          `Not enough energy! Game ends with ${wons} won battles and ${energy} energy`
        );
        break;
      }
    }
  }
  counterStrike(["200", "54", "14", "28", "13", "End of battle"]);

  