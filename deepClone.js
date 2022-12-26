var a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  },
};
console.log(a == 1 && a == 2);

const debounce = (func, wait = 50) => {
  let timer = 0;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

function throttle(func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

const isObj = (val) => typeof val === "object" && val !== null;
function deepClone(obj) {
  const newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    const item = obj[key];
    newObj[key] = isObj(item) ? deepClone(item) : item;
  }
  return newObj;
}

Promise.all = function (arr) {
  return new Promise((res, rej) => {
    let result = [];
    let index = 0;
    let len = arr.length;
    if (len === 0) {
      res(result);
      return;
    }
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then((data) => {
          result[i] = data;
          index++;
          if (index === len) res(result);
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};
