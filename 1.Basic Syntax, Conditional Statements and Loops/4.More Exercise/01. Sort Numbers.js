function sortNumbers(num1, num2, num3) {
 
    let array = [num1, num2, num3];
 
    array.sort().reverse();
 
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
sortNumbers(2,1,3)