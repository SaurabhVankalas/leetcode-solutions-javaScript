// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:
// (i) a next pointer to the next node,
// (ii) a bottom pointer to a linked list where this node is head.
// Each of the sub-linked-list is in sorted order.
// Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. 
// Note: The flattened list will be printed using the bottom pointer instead of next pointer. For more clearity have a look at the printList() function in the driver code.

// Input:
// 5 -> 10 -> 19 -> 28
// |     |     |     | 
// 7     20    22   35
// |           |     | 
// 8          50    40
// |                 | 
// 30               45
// Output:  5-> 7-> 8- > 10 -> 19-> 20->
// 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation:
// The resultant linked lists has every 
// node in a single level.
// (Note: | represents the bottom pointer.)

class Solution {
    
	flatten(head)
	{
			// console.log(head)
			let curr = head;
			while (curr && curr.next) {
					if (curr.next && curr.bottom) {
							if (curr.bottom.data <= curr.next.data) {
									curr.bottom.next = curr.next;
									curr.next = null;
									curr = curr.bottom;
							} else {
									let node = curr.bottom;
									curr.bottom = curr.next;
									curr = curr.bottom;
									// console.log(node, curr, "hii")
									let prev = curr;
									let temp = curr.bottom;
									// let first === null;
									// console.log(node.data, temp.data);
									while(node && temp) {
											if (node.data <= temp.data) {
													const newTemp = node;
													node = node.bottom;
													newTemp.bottom = temp;
													prev.bottom = newTemp;
													// if (first === null) {
													//     first = prev.bottom;
													// }
											} else {
													prev = temp;
													temp = temp.bottom;
													// if (first === null) {
													//     first = prev.bottom;
													// }
													// console.log("hi", prev.data)
											}
									}
									
									if (node) {
											//console.log(prev)
											prev.bottom = node;
									}
									// console.log(JSON.stringify(curr), "hiiiii")
							}
					} else if (curr.bottom === null && curr.next) {
							// console.log("wwe")
							curr.bottom = curr.next;
							curr.next = null;
							curr = curr.bottom;
					} else {
							// console.log(curr)
							curr = curr.bottom;
					}
			}
			// console.log(JSON.stringify(head))
			return head;
	}
}