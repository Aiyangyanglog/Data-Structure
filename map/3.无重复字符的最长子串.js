/**
 * @param {string} s
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度O(m),m是字符串中不重复字符的个数
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
};
