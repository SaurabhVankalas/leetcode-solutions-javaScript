class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

let input = [1,2,3,4,5,null,null,null,null,null,6];

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(6);

const inorderTraversal = (root) => {
	const inOrder = [];
	let curr = root;
	while (curr) {
		if (!curr.left) {
			inOrder.push(curr.val);
			curr = curr.right;
		} else {
			let next = curr.left;
			while(next.right && next.right != curr) {
				next = next.right;
			}
			if (next.right === null) {
				next.right = curr;
				curr = curr.left;
			} else {
				next.right = null;
				inOrder.push(curr.val);
				curr = curr.right;
			}
		}
	}
	return inOrder;
};

const preorderTraversal = (root) => {
	const preOrder = [];
	let curr = root;
	while (curr) {
		if (!curr.left) {
			preOrder.push(curr.val);
			curr = curr.right;
		} else {
			let next = curr.left;
			while(next.right && next.right != curr) {
				next = next.right;
			}
			if (next.right === null) {
				next.right = curr;
				preOrder.push(curr.val);
				curr = curr.left;
			} else {
				next.right = null;
				curr = curr.right;
			}
		}
	}
	return preOrder;
};

console.log(inorderTraversal(root));
console.log(preorderTraversal(root));