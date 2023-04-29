const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 3, c: 5 };
const o3 = { c: 5 };

const x = Object.assign({}, o1, o2, o3);

console.log(x);