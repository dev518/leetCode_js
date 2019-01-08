/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
思路 l 先走n， 然后和r一起走， 当l走到尾时，走了lenth - n， 这个时候r正好走到这个位置
*/
var removeNthFromEnd = function(head, n) {
    var l = head,
        r = head;

    while (n-- && l) {
        l = l.next;
    }

    if(!l) return r.next;

    while (l.next) {
        l = l.next;
        r = r.next;
    }
    r.next = r.next.next;
    return head;
};