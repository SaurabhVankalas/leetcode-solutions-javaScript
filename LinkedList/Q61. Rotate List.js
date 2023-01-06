// Given the head of a linked list, rotate the list to the right by k places.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
	if (!head) return null;
	let len = 0;
	let curr = head;
	let last;
	while(curr) {
			len++;
			if (curr.next === null) last = curr;
			curr = curr.next;        
	}
	k  = k % len;
	if (k === 0) return head;
	let c = 1;
	curr = head;
	while(c !== len - k) {
			curr = curr.next;
			c++;
	}
	// console.log(len, k, curr)
	let newHead = curr.next;
	curr.next = null;
	
	
	last.next = head;
	
	return newHead;
};