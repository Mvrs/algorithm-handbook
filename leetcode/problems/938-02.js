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

// recurrsion
var rangeSumBST = function (root, low, high) {
  const walk = (node, min, max) => {
    let leftSum = 0
    let rightSum = 0

    if (node === null) return 0

    if (node.val > min) {
      leftSum = walk(node.left, min, max)
    }
    if (node.val < max) {
      rightSum = walk(node.right, min, max)
    }

    let sum = leftSum + rightSum

    if (node.val >= min && node.val <= max) {
      sum += node.val
    }
    return sum
  }
  return walk(root, low, high)
};