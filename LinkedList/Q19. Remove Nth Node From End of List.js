/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
	let cur = head;
	let l = 0;
	while(cur) {
			l++;
			cur = cur.next;
	}
	if (l===1 || l===n) {
			return head.next;
	} 
	cur = head;
	let i = 1;
	while(i !== l-n) {
			i++;
			cur = cur.next;
	}
	cur.next = cur.next.next;
	return head;
};