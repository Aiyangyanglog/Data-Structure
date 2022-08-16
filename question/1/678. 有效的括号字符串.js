// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。

// 有效字符串具有如下规则：
// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
// 一个空字符串也被视为有效字符串。

// 示例 1:
// 输入: "()"
// 输出: True

// 示例 2:
// 输入: "(*)"
// 输出: True

// 示例 3:
// 输入: "(*))"
// 输出: True
var checkValidString = function (s) {
  let left = [],
    star = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") left.push(i);
    if (s[i] == "*") star.push(i);
    if (s[i] == ")") {
      if (left.length == 0) {
        if (star.length == 0) return false;
        star.pop();
      } else {
        left.pop();
      }
    }
  }
  if (left.length > star.length) return false;
  while (left.length && star.length) {
    if (left.pop() > star.pop()) return false;
  }
  return true;
};
