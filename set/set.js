let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('some text');
let o = { a: 1,b: 2 };
mySet.add(o);
mySet.add({ a: 1,b: 2 });

const has = mySet.has(o);

mySet.delete(5);
for(let item of mySet) console.log(item);

const myArr = Array.from(mySet);

const mySet2 = new Set([1,2,3,4]);

const intersection = new Set([...mySet].filter(item=>mySet2.has(item)));
const difference = new Set([...mySet].filter(item=>!mySet2.has(item)));