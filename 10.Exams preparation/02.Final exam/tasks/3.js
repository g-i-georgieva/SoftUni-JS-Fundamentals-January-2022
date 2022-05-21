function solve(input) {
  let n = Number(input.shift());
  let catalog = {};
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");

    catalog[name] = {
      rarity: Number(rarity),
      rating: [],
      avgRating: 0,
    };
  }

  while (input[0] !== "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
  }
  
  
  console.log(`Plants for the exhibition:`);

  for (let [name, plant] of Object.entries(catalog)) {
      console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`)

  }


  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rating.push(Number(rating));

      let total = 0;
      for (let rating of plant.rating) {
        total += rating;
      }
      plant.avgRating = total / plant.rating.length;
    } else {
      console.log(`error`);
    }
  }

  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log(`error`);
    }
  }

  function reset(name) {
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rating.length = 0;
      plant.avgRating = 0;
    } else {
      console.log(`error`);
    }
  }
}
solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
