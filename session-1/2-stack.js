class Stack {
    //initialize an empty array for items of stack
    constructor() {
        this.items = []
    }

    //method to add elements to the stack
    //this accepts a single string element or the string elements inside an array
    push(element) {
        if (Array.isArray(element)) {
            element.forEach(item => { //iterate through each element in array
                if (typeof item === 'string') {
                    this.items.push(item)
                }
            });
        } else if (typeof element === 'string') {
            this.items.push(element)
        }
    }

    //remove topmost (most recent) element in the array
    //if the array is empty, it returns "Stack is currently empty"
    pop() {
        if (this.items.length === 0) {
            console.log("Stack is currently empty.")
        } else {
            return this.items.pop()
        }
    }

    //logs the current state of the stack / returns all elements in the array
    check() {
        console.log(this.items)
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.push(1)
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”
