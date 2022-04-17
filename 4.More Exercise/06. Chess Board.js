function chessBoard(size) {
    console.log(`<div class="chessboard">`);
    for (let row = 0; row < size; row++) {
        console.log(`  <div>`);
        let color = (row % 2 == 0) ? "black" : "white";
        for (let col = 0; col < size; col++) {
            console.log(`    <span class="${color}"></span>`);
            color = (color == "white") ? "black" : "white";
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
chessBoard(3)