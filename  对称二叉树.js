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
var isSymmetric = function(root) {
    if(!root)
    return true;
    return ts(root.left,root.right);
};

var ts = function(left,right) {
    if(left == null || right == null){
        if(left == right){
            return true;
        }
        return false;
    }
    if(left.val != right.val) return false;
    return ts(left.left,right.right) && ts(left.right,right.left);
};

