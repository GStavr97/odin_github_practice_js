class LinkedList {
  constructor(head) {
    this.head = null;
  }

  addHead(node) {
    this.head = node;
  }

  headNode() {
    //returns the first node in the list
    return this.head;
  }

  tailNode() {
    let tmp = this.head;
    //returns the tail node in the list
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  sizeNode() {
    //returns the size of the linked list
    let tmp = this.head;
    let sizeofNodes = 1;
    while (tmp.next != null) {
      tmp = tmp.next;
      sizeofNodes++;
    }
    return sizeofNodes;
  }

  at(
    index //returns the node at the specified index
  ) {
    let tmp = this.head;

    if (index < 0 || index > this.sizeNode()) {
      return "The index is out of scope";
    }

    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  toString() {
    let string = "";
    let tmp = this.head;

    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }
    string += "null";
    return string;
  }

  contains(value) {
    let tmp = this.head;

    while (tmp.value != value) {
      if (tmp.next == null) {
        return false;
      }
      tmp = tmp.next;
    }
    return true;
  }

  find(value) {
    let index = 1;
    let tmp = this.head;

    while (tmp.value != value) {
      index++;
      if (tmp.next == null) {
        return null;
      }
      tmp = tmp.next;
    }
    return index;
  }

  pop() {
    let tmp = this.head;

    if (this.head == null) {
      return "The list is empty.";
    } else if (this.sizeNode() < 2 && this.head != null) {
      this.head = null;
      return tmp;
    } else {
      let sizelist = this.sizeNode();
      let popednode = this.tailNode();

      for (let i = 1; i <= sizelist - 1; i++) {
        if (i != sizelist - 1) {
          tmp = tmp.next;
        } else {
          tmp.next = null;
        }
      }
      return popednode;
    }
  }

  append(value) {
    let firstNode = this.head;

    while (this.head.next != null) {
      this.head = this.head.next;
    }
    let currNode = new Node();
    currNode.value = value;
    this.head.next = currNode;

    this.head = firstNode;
  }

  prepend(value) {
    let currNode = new Node();
    currNode.value = value;
    currNode.next = this.head;
    this.head = currNode;
  }

  insertAt(value, index) {
    let addNode = new Node();
    addNode.value = value;

    let startingHead = this.head;

    if (index > this.sizeNode()) {
      this.append(value);
      console.log(
        "The index you gave was out of scope. The value was added to the end of the list."
      );
      return;
    } else if (index <= 0) {
      this.prepend(value);
      console.log(
        "The index you gave was out of scope. The value was added to the start of the list."
      );
      return;
    }

    let prevNode;
    let nextNode;

    for (let i = 0; i <= index; i++) {
      if (index - 2 == i) {
        prevNode = this.head;
      }
      if (index - 1 == i) {
        nextNode = this.head;
      }
      this.head = this.head.next;
    }
    addNode.next = nextNode;
    prevNode.next = addNode;
    this.head = startingHead;
  }

  removeAt(index) {
    if (this.head == null) return;

    let temp = this.head;

    if (index == 1) {
      this.head = temp.next;
      return;
    }

    for (let i = 1; temp != null && i < index - 1; i++) temp = temp.next;

    if (temp == null || temp.next == null) return;

    let next = temp.next.next;

    temp.next = next;
  }
}

class Node {
  constructor(value, next) {
    this.next = null;
    this.value = null;
  }

  addValue(value) {
    this.value = value;
  }

  linknext(node) {
    this.next = node;
  }
}

let linkedlist = new LinkedList();

let node1 = new Node();
let node2 = new Node();
let node3 = new Node();

node1.addValue(1);
node2.addValue(2);
node3.addValue(3);

node1.linknext(node2);
node2.linknext(node3);

linkedlist.addHead(node1);
console.log(linkedlist.toString());
