// Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order: 

// Left boundary nodes: defined as the path from the root to the left-most node ie- the leaf node you could reach when you always travel preferring the left subtree over the right subtree. 
// Leaf nodes: All the leaf nodes except for the ones that are part of left or right boundary.
// Reverse right boundary nodes: defined as the path from the right-most node to the root. The right-most node is the leaf node you could reach when you always travel preferring the right subtree over the left subtree. Exclude the root from this as it was already included in the traversal of left boundary nodes.
// Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary. 

/**
 * @param {Node} root
 * @returns {number[]}
 */

 class Solution {
  boundary(root) {
    const lef = [];
    const rig = [];
    const queue = [];
    lef.push(root.data);
    if (root.left) {
        root.left.leftFlag = true;
        queue.push(root.left);
    }
    // queue.push(root);
    while(queue.length) {
        const node = queue.pop();
        if (node.leftFlag === true || (!node.left && !node.right)) {
            lef.push(node.data);
        } 
        if (node.right) {
            if (!node.left) {
                node.right.leftFlag = node.leftFlag;
            } else {
                node.right.leftFlag = false;
            }
            queue.push(node.right);
        }
        if (node.left) {
            node.left.leftFlag = node.leftFlag;
            queue.push(node.left);
        }
    }
    if (root.right) {
        root.right.rightFlag = true;
        queue.push(root.right);
    }
    while (queue.length) {
        const node = queue.pop();
        if (node.rightFlag === true || (!node.left && !node.right)) {
            rig.push(node.data);
        } 
        if (node.left) {
            if (!node.right) {
                node.left.rightFlag = node.rightFlag;
            } else {
                node.left.rightFlag = false;
            }
            queue.push(node.left);
        }
        if (node.right) {
            node.right.rightFlag = node.rightFlag;
            queue.push(node.right);
        }
        
    }
    // console.log(rig)
    return [...lef, ...rig.reverse()];
  }
}