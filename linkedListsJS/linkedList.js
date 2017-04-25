function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  this.append = function(element) {
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      //loop the list until find last item
      while (current.next) {
        current = current.next
      }

      //get last item and assign next to node to make the link
      current.next = node
    }
    length++;
  }

  this.removeAt = function(position) {
    //check for out of bounds values
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          debugger;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;

      return current.element;

    } else {
      return null;
    }
  }

  this.toString = function() {
    var current = head,
      string = '';

    while (current) {
      string = current.element;
      current = current.next;
    }

    return string;
  }
}

var list = new LinkedList();
list.append(15);
list.append(10);
list.append(11);
list.removeAt(1);