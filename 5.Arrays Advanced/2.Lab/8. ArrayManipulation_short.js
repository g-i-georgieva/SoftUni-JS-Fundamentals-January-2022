function arrayManipulations(arr){
    let arrayNew = arr.shift().split(' ').map(Number)
    for(let i = 0; i < arr.length; i++){
        let move = arr[i].split(' ')
        if(move[0] === 'Add'){
            arrayNew.push(move[1])
        }else if(move[0] === 'Remove'){
            arrayNew = arrayNew.filter(num => num !== Number(move[1]))
        }else if(move[0] === 'RemoveAt'){
            arrayNew.splice(move[1], 1)
        }else if (move[0] === 'Insert'){
            arrayNew.splice(move[2], 0, move[1])
        }  
    }
    console.log(arrayNew.join(' '));
}
arrayManipulations (['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'
])