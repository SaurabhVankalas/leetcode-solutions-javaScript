// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

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
 var reverseKGroup = function(head, k) {
	let curr = head;
	let curr1 = head;
	let len = 0;
	while(curr1) {
			len++;
			curr1 = curr1.next;
	}
	const n = Math.floor(len/k);
	let prev = null;
	let next = null;
	let last = null;
	let ans = null;
	let prevTail = null;
	let c;
	
	for (let i=1; i<=n; i++) {
			c = 0;
			while(curr && c < k) {
					// if (c === 0 && i === 1) prevTail = curr;
					if (c === 0 && i === 1) last = curr;
					if (c === 0 && i === n) prevTail = curr;
					next = curr.next;
					curr.next = prev;
					prev = curr;
					curr = next;
					c++;
			}
			// console.log("hi", prev, next, curr, last, n, ans);
			if (i === 1) {
					ans = prev;
					prev = null;
			} else {
					while(last.next) {
							last = last.next;
					}
					last.next = prev;
					// prevTail = prevTail.next;
					prev = null;
			} 
			
			// curr = prevTail.next;
	}
	prevTail.next = curr;
	
	// console.log(ans);
	return ans;
};