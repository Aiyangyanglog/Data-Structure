const flat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};
let ary = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flat(ary));
