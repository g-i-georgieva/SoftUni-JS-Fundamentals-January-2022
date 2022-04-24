function pointsValidation(arr) {
 
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
 
    let first = firstCheck(arr);
    let second = secondCheck(arr);
    let thirth = thirthCheck(arr)
 
    function firstCheck() {
 
 
        let checkone = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkone;
    }
 
    function secondCheck() {
 
        let checktwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checktwo;
 
    }
 
    function thirthCheck() {
 
        let checkthree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
 
        return checkthree;
 
    }
 
    if (first === Math.trunc(first)) {
 
 
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
 
    } else {
 
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
 
    }
 
    if (second === Math.trunc(second)) {
 
 
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
 
    } else {
 
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
 
    }
 
    if (thirth === Math.trunc(thirth)) {
 
 
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
 
    } else {
 
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
 
    }
 
 
 
}
pointsValidation ([3, 0, 0, 4])