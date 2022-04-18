function sumOdEven (arr){
    let sumOdd=0;
    let sumEven=0;
    
    for (nums of arr){
      if (nums%2==0){
        sumEven+=Number(nums)
      }else {
        sumOdd+=Number(nums)
      }
    }
    console.log (sumEven-sumOdd)
  }
  sumOdEven ([2,4,6,8,10])