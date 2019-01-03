/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let param = {};
    let reseult = false;
    for (let index = 0; index < nums.length; index++) {
        if(param[nums[index]] === 8){
            reseult = true;
            break;
        }
        param[nums[index]]= 8;
        
    }
    return reseult;
};