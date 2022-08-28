/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp0;
    dp0 = dp1;
    dp1 = temp + dp1;
  }
  return dp1;
};
