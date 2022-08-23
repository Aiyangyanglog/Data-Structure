const obj = {};
const func = () => {};
const arr = [];
// 原型链：
// obj -> Object.prototype -> null
// func -> Function.prototype -> Object.prototype -> null
// arr -> Array.prototype -> Object.prototype -> null

// 1.instanceOf的原理：
const instanceOf = (A, B) => {
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p == p.__proto__;
  }
  return false;
};

// 2.对象和函数的属性
var foo = {},
  F = function () {};
Object.prototype.a = "value a";
Function.prototype.b = "Value b";
