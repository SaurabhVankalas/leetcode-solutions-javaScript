// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
	let curr = head;
	let prev = null;
	if (curr && curr.next) {
			const temp = curr.next.next;
			prev = curr;
			curr = curr.next;
			prev.next = temp;
			curr.next = prev;
			head = curr;
			curr.next.next = swapPairs(curr.next.next);
			return curr;
	}
	return head;
};