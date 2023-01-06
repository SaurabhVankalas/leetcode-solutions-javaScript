/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
	const stack = [];
	for (let i=0;i<s.length;i++) {
			let x = s[i];
			if (x === '(' || x === '[' || x === '{') {
					stack.push(x);
			} else {
					const popped = stack.pop();
					if (x === ')' && popped === '(')  {
							continue;
					} else if (x === '}' && popped === '{') {
							continue;
					} else if (x === ']' && popped === '[') {
							continue;
					} else {
							return false;
					}
			}
	}
	// console.log(stack)
	return stack.length == 0;
};