/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if(!root){
       return [];
   }
   var array = [];
   ts(root,1);
   function ts(node,level){
       if(node){
           if(array.length < level){
               array.push([]);
           }

           var arr = array[level - 1];
           arr.push(node.val);
           arr.push(node.left,level + 1);
           arr.push(node.right, level + 1);
       }
       return;
   }

   return array;
};

