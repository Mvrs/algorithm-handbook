class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }

}

class MyLinkedList {
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.length = 0
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return -1

    let curNode = this.head.next

    while (idx--) curNode = curNode.next

    return curNode.val
  }

  addAtHead(val) {
    // get our prev
    let prev = this.head
    // get our next
    let next = this.head.next

    // now our node is connecting to the right places
    let node = new Node(val, prev, next)

    // now update our prev, next
    prev.next = node
    next.prev = node
  }

  addAtTail(val) { }

  addAtIndex(idx, val) { }

  deleteAtIndex(idx) { }

}