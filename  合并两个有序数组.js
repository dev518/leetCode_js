/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
    let i = m - 1;
    let j = n - 1 ;
    let index = m + n - 1;
    while(i >= 0 && j >= 0){
        nums1[index--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }


    /*
    [0]  0
    [1]  1 专门处理这种场景
    */
    while(j >= 0){
        console.log(1)
        nums1[j] = nums2[j--];

    }
    return nums1;
};