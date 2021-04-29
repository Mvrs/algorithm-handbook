// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// const ListNode = require('../../utils/singly-linked-lists')

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  // lets grab the length of the list
  // to determine the distanct from the Kth node (firstNode) to endNode\

  let listLength = 0
  let currentHead = head

  // find the length of the linkedlist
  while (currentHead !== null) {
    listLength++
    currentHead = currentHead.next
  }

  let frontNode = head
  for (let i = 1; i < k; i++) {
    frontNode = frontNode.next
  }

  let endNode = head
  for (let i = 1; i <= listLength - k; i++) {
    endNode = endNode.next
  }

  // attemp swap
  let temp = frontNode.val
  frontNode.val = endNode.val
  endNode.val = temp

  return head
}

module.exports = swapNodes
