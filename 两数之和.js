/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        dict[element] = index;
    }

    console.log(dict)
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const num = dict[target - element];
        console.log(index)
        //这里要去除调同一个pos的数字
        if(num && num != index){
            return [index,num];
        }
    }
    return [];
};

var nums = [2, 7, 11, 15];
var result = twoSum(nums,9)