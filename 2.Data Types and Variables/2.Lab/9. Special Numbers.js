function specialNums(num) {

    for (let i = 1; i <= num; i++) {
        if (i > num) {
            break;
        }

        if (i >= 10) {

            for (let j = i; j <= num; j++) {
                i++;
                let sum = 0;
                j = String(j);
                for (let k = 0; k <= j.length - 1; k++) {
                    sum += Number(j[k]);

                }
                if (sum == 5 || sum == 7 || sum == 11) {
                    console.log(`${j} -> True`)
                } else {
                    console.log(`${j} -> False`)
                }
            }
        } else {
            if (i == 5 || i == 7 || i == 11) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        }
    }

}
specialNums(15)