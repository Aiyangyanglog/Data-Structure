var isPalindrome = function (x) {
  if (x < 0) return false;
  let res = String(x).split("").reverse().join("");
  return res == x;
};
