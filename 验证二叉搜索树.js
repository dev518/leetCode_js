/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//思路  以root为起点，左边所有节点要小于val，右边所有节点要大于val
var isValidBST = function(root) {
  

    return isValid(root,-Infinity,Infinity);
};

var isValid = function(root,min,max) {
    if(root == null){
        return true;
    }
    if(root.val >= max || root.val <= min){
        return false
    }
    return isValid(root.left,min,root.val)  && isValid(root.right,root.val ,max);
};