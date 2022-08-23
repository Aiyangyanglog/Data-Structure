/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = new Map();
  nums1.forEach((n) => {
    map.set(n, true);
  });
  let res = [];
  nums2.forEach((n) => {
    if (map.has(n)) {
      res.push(n);
      map.delete(n);
    }
  });
  return res;
};
