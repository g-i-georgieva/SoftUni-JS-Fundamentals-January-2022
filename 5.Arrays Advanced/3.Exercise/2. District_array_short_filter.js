function duplicates(array) {
    
    let uniqueArray = array.filter((num, i)=>{
        return array.indexOf(num)===i
    })
    console.log(uniqueArray.join(' '));
}
duplicates([7, 8, 9, 7, 2, 3, 4, 1, 2])