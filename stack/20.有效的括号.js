/**
 * @param {string} s
 * @return {boolean}
 */
// 1.枚举法 时间复杂度O(n) 空间复杂度O(n)
var isValid = function (s) {
  if (s.length % 2) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === "(" && c === ")") ||
        (t === "{" && c === "}") ||
        (t === "[" && c === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// 2.使用map 时间复杂度O(n) 空间复杂度O(1)
var isValid = function (s) {
  if (s.length % 2) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === "(" && c === ")") ||
        (t === "{" && c === "}") ||
        (t === "[" && c === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
