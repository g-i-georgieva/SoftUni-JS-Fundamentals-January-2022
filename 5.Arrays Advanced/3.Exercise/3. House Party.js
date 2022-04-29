function housePArty(array) {
  let listOfGuests = [];

  for (let commands of array) {
    let tokens = commands.split(" ");
    let name = tokens[0];
    let presence = tokens[2];

    if (presence == "going!") {
      if (!listOfGuests.includes(name)) {
        listOfGuests.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else if (presence === "not") {
      if (listOfGuests.includes(name)) {
        listOfGuests.splice(listOfGuests.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(`${listOfGuests.join("\n")}`);
}
housePArty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
