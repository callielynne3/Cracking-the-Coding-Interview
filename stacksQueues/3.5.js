// Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use

// an additional temporary stack, but you may not copy the elements into any other data structure

// (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

// Stack.prototype.sortStack = function() {
//   var s, r, temp;
//   while(!s.isEmpty()){
//     var temp = s.pop();
//     while(!r.isEmpty() && s.peek() > temp){
//       s.push(r.pop());
//     }
//     r.push(temp);
//   }
//   while()
// };

function Stack() {
  this.values = [];
}

Stack.prototype.push = function(value) {
  this.values.push(value);
};

Stack.prototype.pop = function() {
  return this.values.pop();
};

Stack.prototype.peek = function() {
  return this.values[this.values.length - 1];
};

Stack.prototype.isEmpty = function() {
  return this.values.length === 0;
};

function sortUnsortedStack(unsortedStack) {
  
  var orderedStack = new Stack();
  // Keep going while there are still values in our unsorted stack
  while (unsortedStack.values.length > 0) {
    // Store the top unsorted value in a variable
    var nextValue = unsortedStack.pop();
    // As long as there are values in the ordered stack that are bigger than our popped value
    while (!orderedStack.isEmpty() && nextValue < orderedStack.peek()) {
      unsortedStack.push(orderedStack.pop());
    }
    orderedStack.push(nextValue);
  }
  return orderedStack;
}

var ourSortedStack = sortUnsortedStack(exampleStack);
console.log(ourSortedStack.values);