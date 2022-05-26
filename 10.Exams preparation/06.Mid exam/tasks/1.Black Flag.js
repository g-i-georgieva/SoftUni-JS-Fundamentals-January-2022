function solve(input) {
  let daysPirating = Number(input.shift());
  let plunderPerDay = Number(input.shift());
  let expectedPlunder = Number(input.shift());
  let collectedPlunder = 0;

  for (let i = 1; i <= daysPirating; i++) {
    let currDay = i;

    collectedPlunder += plunderPerDay;

    if (currDay % 3 == 0) {
      collectedPlunder += plunderPerDay / 2;
    }

    if (currDay % 5 == 0) {
      collectedPlunder *=  0.7;
    }
  }
  let percentage = (collectedPlunder / expectedPlunder) * 100;

  if (collectedPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
solve(["5", "40", "100"]);
solve(["10", "20", "380"]);
