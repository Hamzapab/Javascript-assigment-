// exo 01
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(5e4 + 5e4 ); // 100000
console.log(10e4); // 100000
console.log(10e2 * 10e1); // 100000
console.log(10**5); // 100000
console.log(5e4 * 2); // 100000
console.log(1e5); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000

// exo 02
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// exo  03

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// exo 04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

// exo 05
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2
//  exo 06
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed()); // 10

// exo 07
console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4