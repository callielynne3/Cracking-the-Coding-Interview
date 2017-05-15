// tree 
var node = function(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

var binarySearchTree = function() {
  this.root  = null;
  this.size = 0;
}

binarySearchTree.prototype.insert = function(insertVal) {
  if (this.root === null) {
    this.root = new node(insertVal);
    this.size++;
    return;
  } else {
    var traverse = function(currentNode) {
      if (insertVal > currentNode.value) {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.rightChild);
        }
      } else {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.leftChild);
        }
      }
    }
    traverse(this.root);
    this.size++;
  }
}