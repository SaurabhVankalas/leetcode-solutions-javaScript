/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
	if (!list1 && !list2) return list1;
	
	let prev = new ListNode();
	let cur = prev;
	
	while(list1 && list2) {
			if (list1.val < list2.val) {
					cur.next = list1;
					list1 = list1.next;
			} else {
					cur.next = list2;
					list2 = list2.next;
			}
			cur = cur.next;
	}
	
	while (list1) {
			if (cur === null) {
					cur = list1;
			} else {
					cur.next = list1;
			}
			list1 = list1.next;
			cur = cur.next;
	}
	
	while (list2) {
			if (cur === null) {
					cur = list2;
			} else {
					cur.next = list2;
			}
			list2 = list2.next;
			cur = cur.next;
	}
	return prev.next;
};