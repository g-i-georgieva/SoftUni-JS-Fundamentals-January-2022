function solve(input) {
  let pattern = /(\=|\/)(?<places>[A-Z][A-Za-z]{2,})\1/g;
  let match = input.match(pattern);
  let result = [];
  let travelPoints = 0;

  if (match !== null) {
    for (let el of match) {
      let destination = el.slice(1, -1);
      result.push(destination);
      travelPoints += destination.length;
    }
  }

  console.log(`Destinations: ${result.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
