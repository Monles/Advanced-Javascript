// // Logical OR Operator 
// const a = 5;
// const b = -3;

// console.log(a < 0 || b < 0);

// Nullish colascing operator
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;
let foo; // never set value = undefined

const a = nullValue ?? "default for A";
const b = emptyText ?? "default for B";
const c = someNumber ?? 0;

const d = foo || "Hello!";

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d);