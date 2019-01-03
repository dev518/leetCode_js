
// 这里利用了一个小技巧。把原数组脚标为 0和length - 1的两个元素交换位置，再把 1和length - 2两个元素交换，依次类推直到整个数组顺序正好反转（原本{1,2,3,4,5,6}变成{6,5,4,3,2,1}），再把当前的数组 [0,k) 和 [k,length) 的位置分别进行反转，就这样，利用三次位置反转，就可以得到数组向右旋转k位的结果。
//     reverse()方法能把传入的数组arr的 [start, end] 的位置元素一一调换。
function reverse(nums,start,end){
    for (let index = 0; index <  Math.ceil((end- start)/2) ; index++) {
        let p1 = index + start;
        let p2 = end - start - index;
        if(p1 >= p2){
            break;
        }
        let tmp = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = tmp;
    }
}
var rotate = function(nums, k) {
    var tmp = 0;
    if(k > nums.length || k % nums.length){
        return
    }
    reverse(nums,0,nums.length - 1);
    reverse(nums,0,k -1);
    reverse(nums,k,nums.length-1);
};