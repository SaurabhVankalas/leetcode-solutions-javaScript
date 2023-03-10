// stack - size, pop, getFirstElem, lastElem, 

class Stack {
	constructor(size) {
		this.size = size;
		this.stackArr = [];
	}

	removeLast() {
		this.stackArr.pop();
		return null;
	}

	printStack() {
		console.log(this.stackArr);
		return this.stackArr;
	}

	getFirstElem() {
		console.log(this.stackArr[0]);
		return this.stackArr[0];
	}

	addElem(item) {
		if (this.stackArr.length === this.size) {
			console.log("Stack is full")
			return "Stack is full";
		}

		this.stackArr.push(item);
		return null;
	}
}

const stack = new Stack(3);

stack.printStack();
stack.addElem(2);
stack.addElem(5);
stack.addElem(6);

stack.getFirstElem();
stack.addElem(7);
stack.removeLast();
stack.addElem(7);
stack.printStack();
