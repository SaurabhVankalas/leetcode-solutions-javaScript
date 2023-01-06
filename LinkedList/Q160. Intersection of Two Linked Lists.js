/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */// my approach
 var getIntersectionNode = function(headA, headB) {
	let curr1 = headA;
	let curr2 = headB;
	let intersectionFlag = false;
	const arr = [];
	while(curr1) {
			arr.push(curr1.val);
			curr1.val = 0;
			curr1 = curr1.next;
	}
	while(curr2 && intersectionFlag === false) {
			if (curr2.val === 0) {
					intersectionFlag = true;
					break;
			}
			curr2 = curr2.next;
	}
	curr1 = headA;
	let i = 0;
	while(curr1 && i < arr.length) {
			curr1.val = arr[i];
			i++;
			curr1 = curr1.next;
	}
	if (intersectionFlag) {
			return curr2;
	}
};

// best approach

var getIntersectionNode = function(headA, headB) {
	let curr1 = headA;
	let curr2 = headB;
	while (curr1 !== curr2) {
			if (curr1 !== null) {
					curr1 = curr1.next;
			} else {
					curr1 = headB;
			}
			
			if (curr2 !== null) {
					curr2 = curr2.next;
			} else {
					curr2 = headA;
			}
	}
	
	return curr1;
};