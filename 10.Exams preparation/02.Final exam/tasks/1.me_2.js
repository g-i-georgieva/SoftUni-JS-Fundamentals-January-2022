function worldTour(input){
    let stops = input.shift()

    for (let el of input){
        if (el === 'Travel')break;
        if (el.includes('Add Stop')){
            let [type, index, string] = el.split(':')
            
            let before = stops.substring(0, index)
            let after = stops.substring(index)
            stops = before + string + after
            console.log(stops)
            
        }else if (el.includes('Remove Stop')){
            let [type, startIndex, endIndex] = el.split(':')
            
            let before = stops.substring(0, startIndex)
            endIndex = +endIndex + 1
            let after = stops.substring(endIndex)
            stops = before + after
            console.log(stops)
            
        }else if (el.includes('Switch')){
            let [type, oldString, newString] = el.split(':')
            
            // while (stops.includes(oldString)){
            //     stops = stops.replace(oldString, newString)
            // }
            let pattern = new RegExp(oldString, 'g')
            stops = stops.replace(pattern, newString)
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
