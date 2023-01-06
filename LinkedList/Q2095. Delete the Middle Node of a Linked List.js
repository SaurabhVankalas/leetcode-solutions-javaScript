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
 var deleteMiddle = function(head) {
	if (!head.next) return head.next;
	let length = 0;
	let currNode = head;
	while(currNode) {
			length++;
			currNode = currNode.next;
	}
	const beforeMiddle = parseInt((length)/2) - 1;
	let count = 0;
	currNode = head;
	// console.log(length, beforeMiddle);
	while(currNode) {
			if (count === beforeMiddle) {
					currNode.next = currNode.next.next;
					break;
			}
			count++;
			currNode = currNode.next;
	}
	return head;
};