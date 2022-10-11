Array.prototype._flat = () => {
  for (let item in this) {
    let res = [];
    if (Object.prototype.toString.call(item) === "[Object Array]") {
      res.concat(...item);
    } else {
      res.push(item);
    }
  }
  return res;
};
