// 原型链：
// 字符串a->String.prototype->Object.prototype->null

// 方法一:
String.prototype.trim = function () {
  return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
};
// 方法二:
String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
// 方法三:
String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};
