/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
	//     let prev = null;
	//     let cur = l1;
	//     let next = null;
			
	//     while(cur) {
	//         next = cur.next;
	//         cur.next = prev;
	//         prev = cur;
	//         cur = next;
	//     }
			
	//     let prev2 = null;
	//     let cur2 = l2;
	//     let next2 = null;
			
	//     while(cur2) {
	//         next2 = cur2.next;
	//         cur2.next = prev2;
	//         prev2 = cur2;
	//         cur2 = next2;
	//     }
			
			let carry = 0;
			let head = l1;
			let prevv;
			while (l1) {
					prevv = l1;
					let val;
					if (l1 === null) {
							val = l2.val + carry;
					} else if (l2 === null) {
							val = l1.val + carry;
					} else {
							val = l1.val + l2.val + carry;
					}
					if (val >= 10) {
							carry = 1;
					} else {
							carry = 0;
					}
					if (l2 === null && l1) {
							l1.val = val % 10;
							l1 = l1.next;
					} else {
							l1.val = val % 10;
							if (l1.next === null && l2.next) {
									l1.next = new ListNode();
							} 
							l1 = l1.next;
							l2 = l2.next;
					}
			}
			if (carry === 1) { 
					prevv.next = new ListNode(carry);
			}
			// console.log(head)
			
			return head;
	};