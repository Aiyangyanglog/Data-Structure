// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。

// 示例 1：
// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 示例 2：
// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

// 示例 3：
// 输入：4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3

// 方法一: 动态规划
var fib = (n) => {
  if (n < 2) return n;
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// 方法二: 递归
var fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// 方法三: 字典(优化添加了记忆，缓存之前计算过的数列的值，再次计算的时候直接返回值即可)
const map = new Map();
var fib = (n) => {
  if (n < 2) return n;
  if (!map.has(n)) {
    map.set(n, fib(n - 1) + fib(n - 2));
  }
  return map.get(n);
};
