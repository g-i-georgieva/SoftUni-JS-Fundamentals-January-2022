function solve(arr) {
    let bombs = arr.pop().split(' ')
    let dmg = 0;
    let kills = 0;

    let myArr = arr.map(arr => arr.split(' ').map(Number));
    for (let i = 0; i < bombs.length; i++) {
        let arrTargetIndex = Number(bombs[i].split(',')[0]);
        let elementTargetIndex = Number(bombs[i].split(',')[1]);


        let damage = myArr[arrTargetIndex][elementTargetIndex];

        if (damage <= 0) {
            continue;
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let currentRow = arrTargetIndex - 1 + i;
                let currentColumn = elementTargetIndex - 1 + j;

                if (currentRow >= 0 && currentColumn >= 0) {
                    if (myArr[currentRow] != undefined && myArr[currentRow][currentColumn] != undefined) {

                        myArr[currentRow][currentColumn] -= damage;

                        if (currentRow == arrTargetIndex && currentColumn == elementTargetIndex) {
                            dmg += damage;
                            kills++;
                        }

                        if (myArr[currentRow][currentColumn] < 0) {
                            myArr[currentRow][currentColumn] = 0;
                        }
                    }
                }
            }
        }
    }

    myArr.forEach(line => {
        dmg += line.reduce((a, b) => a + b)
        kills += line.filter(e => e != 0).length
    });

    console.log(dmg);
    console.log(kills);
}
solve(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
)