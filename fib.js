// const fib = (n) => {
//   if (n < 2) return n;
//   let dp0 = 0;
//   let dp1 = 1;
//   for (let i = 2; i <= n; i++) {
//     const temp = dp0 + dp1;
//     dp0 = dp1;
//     dp1 = temp;
//   }
//   return dp1;
// };

let cache = {};
const fib = (n) => {
  if (n < 2) return n;
  if (cache[n]) {
    return cache[n];
  } else {
    let res = fib(n - 2) + fib(n - 1);
    cache[n] = res;
    return res;
  }
};
console.log(fib(10));
