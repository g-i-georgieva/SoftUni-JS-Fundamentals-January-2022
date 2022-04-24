function printDNA(num){
    let count =0;
    let countNiz = 0;
    let dna = ['AT','CG','TT','AG','GG']   //масив за по-лесен достъп дo конкретните елементи за печат
    for(let i = 0; i<num; i++){
        if (count >3){  //ресет за да започне повтаряемостта от знаци отначало
            count =0;
        }
        if (countNiz > 4 ){  //ресет за да започне масива от нула
            countNiz =0;
        }
        console.log(returnDna(count,dna[countNiz]));
        count++;
        countNiz++
    }
 
    function returnDna(counter,niz){
        switch (counter) {
            case 0:
                return (`**${niz}**`);
            case 1:
            case 3:
                return (`*${niz[0]}--${niz[1]}*`);
            case 2:
                return (`${niz[0]}----${niz[1]}`);
        }
    }
}
printDNA(4);
printDNA(10);