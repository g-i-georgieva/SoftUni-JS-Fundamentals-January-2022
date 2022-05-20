function solve(input) {
    let stops = input.shift()
    for (let line of input) {
        let [command, par1, par2] = line.split(':')
        if (line == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        if (command == 'Add Stop') {
            if (stops[+par1] !== undefined) {
                let left = stops.slice(0, +par1)
                let rest = stops.slice(+par1)
                stops = left + par2 + rest
            }
            console.log(stops)
        } else if (command == 'Remove Stop') {
            if (stops[+par1] !== undefined && stops[+par2] !== undefined) {
                let left = stops.slice(0, par1)
                let rest = stops.slice(+par2 + 1)
                stops = left + rest
            }
            console.log(stops)
        } else if (command == 'Switch') {
            if (stops.includes(par1)) {
                let pattern = new RegExp(par1, 'g')
                stops = stops.replace(pattern, par2)
            }
            console.log(stops);
        }
    }
}

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])

