function equalNeighbors(arr) {
    let count = [];
    for (let i = 1; i < arr.length; i++) {
        let filteredArray = arr[i].filter((number, index) => {
            return arr[i - 1].indexOf(number, index) === index

        })
        count.push(...filteredArray)
        let filteredArray1 = arr[i - 1].filter((element, index) => {
            return element === arr[i - 1][index - 1]
        })
        count.push(...filteredArray1)

        /*
        for (let j=0; j<arr[i].length; j++){
            
            if(i+1==arr.length){
                if(j+1==arr[i].length){
                    continue;
                }else  if( arr[i][j]==arr[i][j+1]){
                    count ++;
                }
            }else if(j+1>=arr[i].length){
                if( arr[i][j]==arr[i+1][j]){
                    count ++;
                }
            }
            else if( arr[i][j] == arr[i+1][j] || arr[i][j]==arr[i][j+1]){
                if(arr[i][j] == arr[i+1][j] ){
                count ++;
                }
                if( arr[i][j]==arr[i][j+1]){
                    count ++; 
                }
            }
        }
        */
    }
    let filteredArray2 = arr[arr.length - 1].filter((element, index) => {
        return element === arr[arr.length - 1][index - 1]
    })
    count.push(...filteredArray2)

    console.log(count.length)
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
