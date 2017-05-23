//Stack
var Stack = function(){
  this.top = null;
  this.size = 0;
};

var Node = function(data){
  this.data = data;
  this.previous = null;
};

// push
Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

// pop
Stack.prototype.pop = function() {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};

//Queue
var Queue = function() {
  this.first = null;
  this.size = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

// push 
Queue.prototype.push = function(data) {
  var node = new Node(data);

  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }

  this.size += 1;
  return node;
};

// shift
Queue.prototype.shift = function() {
  temp = this.first;
  this.first = this.first.next;
  this.size -= 1;
  return temp;
};