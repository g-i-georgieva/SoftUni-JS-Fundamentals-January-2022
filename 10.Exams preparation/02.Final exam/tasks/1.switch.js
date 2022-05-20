function solve(input) {
    let destinations = input.shift();

    let linesOfInput = input.shift();
    while (linesOfInput != "Travel") {
        let tokens = linesOfInput.split(":");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        switch (command) {
            case "Add Stop":
                if (+p1 >= 0 && +p1 <= destinations.length); {
                    let left = destinations.slice(0, +p1);
                    let right = destinations.slice(+p1);
                    destinations = left + p2 + right;
                }
                console.log(destinations);
                break;
            case "Remove Stop":
                if (+p1 >= 0 && +p1 < destinations.length &&
                    +p2 >= 0 && +p2 < destinations.length) {

                    let startIndex = destinations.slice(0, +p1);
                    let endIndex = destinations.slice(+p2 + 1);
                    destinations = startIndex + endIndex;
                }
                console.log(destinations);
                break;
            case "Switch":
                if (destinations.includes(p1)) {
                    destinations = destinations.replace(p1, p2);
                }
                console.log(destinations);
                break;
        }
        linesOfInput = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
solve(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"])