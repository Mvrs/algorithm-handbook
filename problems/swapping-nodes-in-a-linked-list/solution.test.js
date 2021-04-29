const { deserialize, serialize } = require("../../utils/singly-linked-lists");
const swapNodes = require("./solution");

function getNode(head, k) {
  let node = head;
  while (node.val !== k) {
    node = node.next;
  }
  return node;
}

// test('Example 1', () => {
//   const head = deserialize([1, 2, 3, 4, 5])
//   const k = 2
//   swapNodes(head, k)
//   expect(serialize(head)).toStrictEqual([1, 4, 3, 2, 5])
// })
