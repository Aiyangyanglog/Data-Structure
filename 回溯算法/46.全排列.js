/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) return;
      backtrack(path.concat(n));
    });
  };
  backtrack([]);
  return res;
};
