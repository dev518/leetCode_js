/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let pre = null;
    let next = null;
    while(head != null){
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;

}