// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
    let nextEl = head.next;
    let prev = null;

    while (head.next) {
        const temp = nextEl.next;
        head.next = prev;
        prev = head;
        head = nextEl;
        nextEl = temp; 
    }

    head.next = prev;

    return head;
}
