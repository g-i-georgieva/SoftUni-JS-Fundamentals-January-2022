function rotate(brand, album, song) {
    let time = (album.length * brand.length) * song.length / 2
    let rotations = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}
rotate('Rammstein', 'Sehnsucht', 'Engel')