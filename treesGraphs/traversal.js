/**
 *  1. Write a function that takes in an array of integers and performs the insert method on each
 *     item of the array in order.
 *
 *  Input: Array
 *  Output: Binary Search Tree
 *
 *  Example: [4, 2, 5, 1, 3, 7, 6, 8]
 *  Output this binary search tree:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 **/


binarySearchTree.prototype.insertMultiple = function(array){
  for (var i = 0; i < array.length; i++){
    this.insert(array[i]);
  }
}

/**
 *  2. Given the example output binary search tree from Problem 1, what would the order of values
 *     printed be if we used:
 *
 *     a. BREADTH FIRST traversal
 *     [4, 2, 5, 1, 3, 7, 6, 8]
 *
 *      b. PRE-ORDER DEPTH first traversal
 *     [4, 2, 1, 3, 5, 7, 6, 8]
 *
 *     c. IN-ORDER DEPTH first traversal
 *     [1, 2, 3, 4, 5, 6, 7, 8]
 *
 *     d. POST-ORDER DEPTH first traversal
 *     [1, 3, 2, 6, 8, 7, 5, 4]
 **/

/**
 *  3a. Using a queue, and while loop write a function that takes in a binary search tree and
 *      outputs an array of values ordered by BREADTH FIRST traversal.
 *
 *  Input: Binary Search Tree
 *  Output: Array
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  NOTE: Confirm with your answer from problem 2a.
 **/

binarySearchTree.prototype.breadthFirst = function(){

  var queue = [];
  var result = [];
  var cNode;
  queue.push(this.root);

  while (queue.length > 0) {

    cNode = queue.shift();
    if (cNode.leftChild !== null) {
      queue.push(cNode.leftChild);
    }

    if (cNode.rightChild !== null) {
      queue.push(cNode.rightChild);
    }

    result.push(cNode.value);
  }

  return result;
}

/**
 *  3b. Using recursion, write a function that takes in a binary search tree and outputs an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2b.
 **/
binarySearchTree.prototype.preOrder = function(){

  var result = [];
  var traverse = function(cNode) {

    if (cNode === null) {
     return;
    }

    result.push(cNode.value);
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);

  }
  traverse(this.root);
  return result;
}

/**
 *  3c. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2c.
 **/

binarySearchTree.prototype.inOrder = function() {
  var result = [];
  var traverse = function(cNode){

    // Best Case
    if(cNode === null) {
     return;
    }

    // Recursion Case
    traverse(cNode.leftChild);
    result.push(cNode.value);
    traverse(cNode.rightChild);
  }
  traverse(this.root);
  return result;
}

/**
 *  3d. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2d.
 **/

binarySearchTree.prototype.postOrder = function(){
  var result = [];

  var traverse = function(cNode){
    // best case
    if (cNode === null) {
     return;
    }

    //recursion case
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);
    result.push(cNode.value);

  }
  traverse(this.root);
  return result;
}