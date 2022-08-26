/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const backtract = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let j = start; j < nums.length; j++) {
      backtract(path.concat(nums[j]), l, j + 1);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    backtract([], i, 0);
  }
  return res;
};
