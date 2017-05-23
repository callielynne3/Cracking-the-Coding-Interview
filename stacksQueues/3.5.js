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

function sortStack(unsortedStack) {
  var sortedStack = [];
  while (unsortedStack.length > 0) {
    console.log(sortedStack);
    var next = unsortedStack.pop();
    if (sortedStack.length !== 0) {
      while (next < sortedStack[sortedStack.length - 1]) {
        unsortedStack.push(sortedStack.pop());
      }
    }
    sortedStack.push(next);
  }
  console.log(sortedStack);
  return sortedStack;
}