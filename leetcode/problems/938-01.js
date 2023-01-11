/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Stack Solution

var rangeSumBST = function (root, low, high) {
  const stack = [[root, low, high]]
  let sum = 0

  while (stack.length) {
    const [node, min, max] = stack.pop()

    if (node !== null) {
      if (node.val > min) {
        stack.push([node.left, min, max])
      }

      if (node.val < max) {
        stack.push([node.right, min, max])
      }

      if (node.val >= min && node.val <= max) {
        sum += node.val
      }
    }
  }

  return sum
};