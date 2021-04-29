function serialize(list) {
  const array = []
  let currNode = list

  while (!currNode) {
    array.push(currNode.val)
    currNode = currNode.next
  }

  return array
}

module.exports = serialize
