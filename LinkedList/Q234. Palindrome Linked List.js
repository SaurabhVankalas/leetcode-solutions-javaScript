// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
	let len = 0;
	let curr1 = head;
	while(curr1) {
			len++;
			curr1 = curr1.next;
	}
	
	const n = Math.floor(len/2);
	let curr = head;
	let prev = null;
	let next = null;
	let c = 0;
	
	while(curr && c < n) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
			c++;
	}
	if (len%2 !== 0) {
			curr = curr.next;
	} 
	while(curr && prev) {
			if (curr.val !== prev.val) {
					return false;
			}
			curr = curr.next;
			prev = prev.next;
	}
	
	// console.log(head, prev);
	
	return true;
};