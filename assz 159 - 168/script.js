// Exo 01 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myAge = new Date() - new Date("1999-07-06")
// console.log(Math.round(myAge  / 1000 )+ "Seconds")
// console.log(Math.round(myAge / 1000 / 60 )+ "minutes ")
// console.log(Math.round(myAge  / 1000 / 60 / 60 )+ "hours")
// console.log(Math.round(myAge / 1000 / 60 / 60 / 24 )+ "Days")
// console.log(Math.round(myAge / 1000 / 60 / 60 / 24 / 30) + "months")
// console.log(Math.round(myAge / 1000 / 60 / 60 / 24 / 30 / 12) + "years")


// Exo 02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// let DateBefore = new Date()
// DateBefore.setFullYear(1980,00,01)
// DateBefore.setHours(00,00,01)
// console.log(DateBefore)
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// Exo 03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let dateLastMonth = new Date()  ;
// dateLastMonth.setDate(0);

// console.log(dateLastMonth)
// console.log(`Previous Month Is ${months[dateLastMonth.getMonth()]}  And Last Day Is ${dateLastMonth.getDate()}`)
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

// Exo 04 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myBirthdayOne = new Date(1999,06,06,0,0,0);

// let myBirthdayTwo = new Date();
// myBirthdayTwo.setFullYear(1999,06,06)
// myBirthdayTwo.setHours(00,00,00)

// let myBirthdayThree = new Date(Date.parse("1999-7-6"));
// console.log(myBirthdayOne)
// console.log(myBirthdayTwo)
// console.log(myBirthdayThree)

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// Exo 05 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const t0 = performance.now()
// for(let i = 0; i < 100000;i++){
//     console.log(i)
// }
// const t1 = performance.now();

// console.log(`loop took ${(t1 - t0).toFixed()} Milliseconds`)

// Exo 06 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function* gen(){
//     yield 14;
//     yield 154;
//     yield 494;
//     yield 1034;
//     yield 1774;
//     yield 2714;
//     yield 3854;
//     yield 5194;
//     yield  6734;

// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// Exo 07 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }
// function* genAll(){
//     yield* new Set(genNumbers())
//     yield* new Set(genLetters())
// }
// let generator = genAll();

//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}

// Exo 08 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import calc,{modOne} from "./mod-one.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60




















