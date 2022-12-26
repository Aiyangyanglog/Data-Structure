let url =
  "https://shop45596341.m.youzan.com/wscgoods/detail/1ygg13f6d7iv1?alias=1ygg13f6d7iv1&a=1&b=2";
const getQuery = (url, param) => {
  let params = url.split("?")[1];
  let arr = params.split("&");
  let obj = {};
  for (let item of arr) {
    let arr0 = item.split("=")[0];
    let arr1 = item.split("=")[1];
    obj[arr0] = arr1;
  }
  return obj[param];
};
getQuery(url, "a");
