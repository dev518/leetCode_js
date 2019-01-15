
//思路  通过快慢指针 快指针2步，慢指针1步，等到快指针走完，慢指针正好中点
//后半部分反转  列表分奇偶 123  1234  slow分别指在1、2 
//后半部分正序 一一 对比
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let cachedHead = head;
    while(fast.next.next != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let pre = null;
    let next = null;
    while(slow != null){
        next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }

    for (; cachedHead != null; cachedHead = cachedHead.next, pre = pre.next) {
        if(cachedHead.val !== pre.val){
            return false;
        }
        
    }

    return true;
};