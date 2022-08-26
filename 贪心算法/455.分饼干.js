/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const sortFunc = (a, b) => {
    return a - b;
  };
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  s.forEach((n) => {
    if (n >= g[i]) {
      i += 1;
    }
  });
  return i;
};
