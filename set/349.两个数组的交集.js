/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(m*n) 空间复杂度O(m)
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter((n) => nums2.includes(n));
};
