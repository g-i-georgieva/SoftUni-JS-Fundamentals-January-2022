function addAndSubstract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum
    }
    let substract = (addResult, thirdNum) => addResult - thirdNum;
    let result = add(num1, num2);
    let finalResult = substract(result, num3);
    console.log(finalResult);
}
addAndSubstract(23, 6, 10)