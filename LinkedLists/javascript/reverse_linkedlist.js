// leetcode link: https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    // 'prev' stores the previous node
    // Initially there is no previous node
    let prev = null;

    // 'current' points to the current node
    // Start from the head of the linked list
    let current = head;

    // Continue until we reach the end of the linked list
    while (current) {

        // Store the next node before changing current.next
        const next = current.next;

        // Reverse the current node's pointer
        // Instead of pointing to next, it now points to prev
        current.next = prev;

        // Move prev one step forward
        // Current node becomes the previous node
        prev = current;

        // Move current one step forward
        // Continue with the node we saved earlier
        current = next;
    }

    // 'prev' is now the new head of the reversed linked list
    return prev;
};