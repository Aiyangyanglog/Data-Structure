// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）

// 示例：
// 二叉树：[3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回其层序遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 方法一:广度优先遍历
var levelOrder = function (root) {
  if (!root) return [];
  const q = [[root, 0]];
  const res = [];
  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }
    if (n.left) q.push([n.left, level + 1]);
    if (n.right) q.push([n.right, level + 1]);
  }
  return res;
};
// 方法二:时间复杂度O(n),空间复杂度O(n)
var levelOrder = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return res;
};
