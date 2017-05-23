// binary search tree
var node = function(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
};

var binarySearchTree = function() {
  this.root  = null;
  this.size = 0;
};

// insert 
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
};

// search
binarySearchTree.prototype.search = function(searchVal) {
  var check = false;
  var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value === searchVal) {
      check = true;
      return;
    }
    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
  }
  traverse(this.root);
  return check;
};

// delete
binarySearchTree.prototype.delete = function(removeVal) {
   var temp = [];
   var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value !== removeVal) {
      temp.push(currentNode.value);
    }
    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
   }
   traverse(this.root);
   if (temp.lenght === this.size) {
    console.log("there is no such value to delete");
    return;
   }
   this.root = null;
   this.size = 0;
   var toInsert;
   for (var i = 0; i < temp.length; i++) {
    toInsert = temp[i];
    this.insert(toInsert);
   }
   return temp;
};