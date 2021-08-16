// 函数柯里化:只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
// 主要思路是:要判断当前传入函数的参数个数 (args.length) 是否大于等于原函数所需参数个数 (fn.length) ，如果是，则执行当前函数；如果是小于，则返回一个函数。
// 柯里化主要有3个作用： 参数复用、提前返回和 延迟执行

// const add = (x, y) => x + y;
// addCurry(1, 2);

// const add = x => y => x + y;
// addCurry(1)(2);

// const add = x => y => z => x + y + z;
// addCurry(1)(2)(3);

const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args);

function add(x, y, z) {
  return x + y + z;
}
const addCurry = curry(add);
console.log(addCurry(1, 2, 3));
console.log(addCurry(1)(2)(3));
console.log(addCurry(1, 2)(3));
console.log(addCurry(1)(2, 3));
