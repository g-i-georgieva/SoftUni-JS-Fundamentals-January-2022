function sumFirstAndLast(numsAsStrings) {
    nums = numsAsStrings.map(Number);
    console.log(nums[0]+nums.pop())
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])