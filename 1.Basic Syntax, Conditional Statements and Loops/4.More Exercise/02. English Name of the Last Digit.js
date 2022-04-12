function lastdigitEnName(number) {

    let lastdigit = number % 10
    if (lastdigit === 1) {
        console.log('one')
    } else if (lastdigit === 2) {
        console.log('two')
    } else if (lastdigit === 3) {
        console.log('three')
    } else if (lastdigit === 4) {
        console.log('four')
    } else if (lastdigit === 5) {
        console.log('five')
    } else if (lastdigit === 6) {
        console.log('six')
    } else if (lastdigit === 7) {
        console.log('seven')
    } else if (lastdigit === 8) {
        console.log('eight')
    } else if (lastdigit === 9) {
        console.log('nine')
    } else if (lastdigit === 0) {
        console.log('zero')
    }
}

lastdigitEnName(512)