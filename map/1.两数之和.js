/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n, i);
    }
  }
};
