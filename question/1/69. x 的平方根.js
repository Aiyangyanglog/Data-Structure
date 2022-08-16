// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:
// 输入: 4
// 输出: 2

// 示例 2:
// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842...,
//      由于返回类型是整数，小数部分将被舍去。

// 方法一:
var mySqrt = function (x) {
  return parseInt(Math.sqrt(x));
};

// 方法二:
var mySqrt = function (x) {
  let s = 0;
  while (s * s <= x) {
    s++;
  }
  return s - 1;
};
// 方法三:(二分搜索)
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1,
    mid,
    right = Math.floor(x / 2);
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
