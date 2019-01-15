/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //思路 快慢指针 遍历 如果没环 就不会相遇
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next

        if(slow == fast){
            return true;
        }
    }
    return false;
};