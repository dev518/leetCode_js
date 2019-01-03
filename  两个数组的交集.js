/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var compare = function (x, y) {//比较函数
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
}

var intersect = function(nums1, nums2) {
    //js 的数组对于数字的排序有个坑，如果直接sort是转成string 排
    nums1.sort(compare)
    nums2.sort(compare)
    console.log(nums1);
    console.log(nums2);
    let newArr = [];
    let shortLenth = nums1.length > nums2.length ? nums2.length: nums1.length;
    let j = 0;
    let i = 0;
    let k = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i]== nums2[j]){

            newArr[k] = nums1[i];
            k++;
            j++;
            i++;

        }else if(nums1[i] < nums2[j]){
            i++;
        }else if(nums1[i] > nums2[j]){
            j++;
        }
    }
    return newArr;
};