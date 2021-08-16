/*
 * @Description:
 * @Author: yangyangai
 * @Date: 2021-05-06 16:16:13
 * @LastEditors: yangyangai
 * @LastEditTime: 2021-05-06 16:29:50
 */
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1：
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

var replaceSpace = function (s) {
	return s.replace(/\s/g, '%20');
};
