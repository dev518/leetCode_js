/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element === 0){
            zeroCount++;
        }else{
            nums[index - zeroCount] = element;
        }
        
    }

    for (let index = 0; index < zeroCount; index++) {
        nums[nums.length - index] = 0;
        
    }

    return nums;
};