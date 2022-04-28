function arrManipulation(arr){
    let newArr = arr.shift().split(" ").map(Number)
 
 
    for (let i = 0; i < arr.length; i++){
        let current = arr[i].split(' ')
 
        if(current.includes("Add")){
            newArr.push(Number(current[1]))
        }
 
        if(current.includes("Remove")){
 
          newArr = newArr.filter(num => num !== Number(current[1]))
        }
 
        if(current.includes("RemoveAt")){
            let currentIndex = Number(current[1])
            newArr.splice(currentIndex, 1)
 
        }
 
        if(current.includes("Insert")){
            let num = Number(current[1])
            let position = current[2]
            newArr.splice(position, 0, num)
 
        }
    }
 
    console.log(newArr.join(' '));
}
arrManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)