// Replace ? With Arithmetic Operators to get 0
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// exo 02
let num = 3;

// Solution One
console.log(num * (true + true )); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(num*num - num); // 6

// Soultion Four
console.log(++num + (true + true)); // 6

// Solution Five
console.log(++num + true); // 6

// Solution Six
console.log(++num); // 6


// eco 03
let numm = "10";

// Solution One
console.log(numm * (true +true)); // 20

// Solution Two
console.log(+numm + +numm); // 20

// Solution Three
console.log(+numm + numm / true); // 20

// Solution Four
console.log(-numm + +numm * (true + true + true)); // 20
// Solution five 
console.log(+numm++ + +numm - true); // 20