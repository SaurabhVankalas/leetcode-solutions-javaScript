//User function Template for javascript

/**
 * @param {Node} root
*/
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
const recursion = (root, obj) => {
	if (!root) return;
	const hd = root.hd;
	const level = root.level;
	if (!(hd in obj)) {
			obj[hd] = [root.data, level];
	} else {
			if (level < obj[hd][1]) {
					obj[hd] = [root.data, level];
			}
	}
	if (root.left) {
			root.left.hd = hd - 1;
			root.left.level = level+1;
			recursion(root.left, obj);
	}
	if (root.right) {
			root.right.hd = hd + 1;
			root.right.level = level+1;
			recursion(root.right, obj);
	}
	return obj;
};
class Solution
{
	//Function to return a list of nodes visible from the top view 
	//from left to right in Binary Tree.
	topView(root)
	{
			root.hd = 0;
			root.level = 0;
			const obj = recursion(root, {});
			// console.log(obj);
			let pos = 0;
			const right = [];
			while (pos in obj){
					right.push(obj[pos][0]);
					pos++;
			}
			pos = -1;
			const left = [];
			while (pos in obj) {
					left.push(obj[pos][0]);
					pos--;
			}
			left.reverse();
			return [...left, ...right];
	}
}