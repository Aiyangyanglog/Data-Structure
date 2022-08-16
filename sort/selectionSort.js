Array.prototype.selectionSort = () => {
  for (let i = 0; i < this.length; i++) {
    let indexMin = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (iindexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
};
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
console.log(arr);
