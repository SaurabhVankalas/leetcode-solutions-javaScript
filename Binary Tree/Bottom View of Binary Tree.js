class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

let root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);

const recursion = (root, hzD,level, obj) => {
	if (!root) return;
	if (obj[hzD]) {
	    if (obj[hzD][0] <= level) {
	        obj[hzD] = [level, root.data];
	    }
	} else {
	    obj[hzD] = [level, root.data];
	}
	if ('minHzD' in obj) {
		obj.minHzD = Math.min(obj.minHzD, hzD);
	} else {
		obj.minHzD = hzD;
	}
	recursion(root.left, hzD-1,level+1, obj);
	recursion(root.right, hzD+1,level+1, obj);
};

class Solution
{
	//Function to return a list containing the bottom view of the given tree.
	bottomView(root)
	{
			let obj = {};
			let res = [];
			recursion(root, 0,0, obj);
			let pointer = obj.minHzD;
			// console.log(obj, pointer);
			while(obj[pointer]) {
				res.push(obj[pointer][1]);
				pointer++;
			}
			
			return res;
	}

	bottomViewQueue(root) {
		const queue = [];
		let mapp = new Map();
		root.hz = 0;
		root.level = 0;
		queue.push(root);
		while(queue.length) {
			const node = queue.pop();
			const hz = node.hz;
			const level = node.level;
			if ((mapp.has(hz) && mapp.get(hz)[0] <= level) || !mapp.has(hz)) {
			    mapp.set(hz, [level, node.data]);
			} 
			if (node.right != null) {
				node.right.hz = hz + 1;
				node.right.level = level + 1;
				queue.push(node.right);
			}
			if (node.left != null) {
				node.left.hz = hz - 1;
				node.left.level = level + 1;
				queue.push(node.left);
			}
		}
		// console.log(mapp)
		const getValues = [...mapp].sort((a,b) => a[0]-b[0]);
		// console.log(getValues)

		const ans = [];
		for (let item of getValues) {
			ans.push(item[1][1]);
		}
		return ans;
	}
}

const instance = new Solution();
console.log(instance.bottomView(root));
console.log(instance.bottomViewQueue(root));