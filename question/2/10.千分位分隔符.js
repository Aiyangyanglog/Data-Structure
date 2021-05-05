const numFormat = (num) => {
  num = num.toString().split(".");
  var arr = num[0].split("").reverse();
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(",");
    }
    res.push(arr[i]);
  }
  res.reverse();
  if (num[1]) {
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
};

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"
