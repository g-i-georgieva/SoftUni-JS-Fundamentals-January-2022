function cone(radius, high) {
    console.log(`volume = ${((1 / 3) * Math.PI * (radius * radius) * high).toFixed(4)}`)
    console.log(`area = ${(Math.PI * radius * (radius + Math.sqrt(radius * radius + high * high))).toFixed(4)}`)
}
cone(3, 5)