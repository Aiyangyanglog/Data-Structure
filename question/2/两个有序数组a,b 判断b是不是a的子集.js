var isChild = function (a, b) {
  var len = b.length;
  for (let i = 0; i < len; i++) {
    if (b[i] !== a[i]) return false;
  }
  return true;
};
var b = [1, 2, 3, 4, 5];
var a = [1, 2, 3, 4, 5];
console.log(isChild(a, b));
