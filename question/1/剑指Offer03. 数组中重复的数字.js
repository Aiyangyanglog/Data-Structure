/*
 * @Description:
 * @Author: yangyangai
 * @Date: 2021-05-06 14:00:59
 * @LastEditors: yangyangai
 * @LastEditTime: 2021-05-06 14:26:28
 */
// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

var findRepeatNumber = function (nums) {
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		let c = nums[i];
		if (!set.has(c)) {
			set.add(c);
		} else {
			return c;
		}
	}
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
