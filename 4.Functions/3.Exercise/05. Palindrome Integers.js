function palindromeIntegers(inputArray) {
    let arrayOfNums = inputArray;

    function isPalindrome(number) {
        let starNum = number;
        let reversedNum = Number(number.toString().split("").reverse().join(""));
        if (starNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }
    for (let index = 0; index < arrayOfNums.length; index++) {
        let currNum=arrayOfNums[index];
        console.log(isPalindrome(currNum))
        
    }
}
palindromeIntegers ([123,323,421,121])