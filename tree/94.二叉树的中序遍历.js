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
 * @return {number[]}
 */

// 递归版
var inorderTraversal = function (root) {
  const res = [];
  const rec = (n) => {
    if (!n) return;
    rec(n.left);
    res.push(n.val);
    rec(n.right);
  };
  rec(root);
  return res;
};
// 非递归版（用栈）
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    res.push(n.val);
    p = n.right;
  }
  return res;
};
