function solve(input) {
  let result = {};
  for (let line of input) {
    let [name, address] = line.split(":");

    result[name] = address;
  }

  //   let sorted = Object.entries(result);
  //   sorted.sort((a, b) => a[0].localeCompare(b[0]));

  //   for (let [name, address] of sorted) {
  //     console.log(name, "->", address);
  //   }

  let sortedKeyss = Object.keys(result);
  sortedKeyss.sort((a,b)=>a.localeCompare(b));
    
  for (let name of sortedKeyss) {
      console.log(name, "->", result[name]);
    }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
