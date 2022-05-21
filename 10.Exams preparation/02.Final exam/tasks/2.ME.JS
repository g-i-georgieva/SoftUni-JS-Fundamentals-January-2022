function solve(input) {
    let pattern = /(\/|=)(?<place>[A-Z][A-Za-z]{2,})\1/g
    let match = pattern.exec(input)
    let arrPlaces = []
    let pointss = 0

    while (match !== null) {

        let place=match.groups["place"]
        pointss+=place.length
        arrPlaces.push(place)
        match = pattern.exec(input)
    }
    console.log(`Destinations: ${arrPlaces.join(', ')}`);
    console.log(`Travel Points: ${pointss}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve(("ThisIs some InvalidInput"))