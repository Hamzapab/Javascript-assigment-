// Exo 01 **************************************

// let setOfNumbers = new Set([10]);

// setOfNumbers.add(20).add(setOfNumbers.size);;

// console.log(setOfNumbers);

// console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1])

// Exo 02 *************************************

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(Array.from(new Set(myFriends)).sort());
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// Exo 03 *******************************************

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// // Methode 01
// // let myMap = new Map()
// // for (i = 0; i < Object.keys(myInfo).length;i++){
// //   myMap.set(Object.keys(myInfo)[i],Object.values(myInfo)[i])
// // }
// // methode 02
// let myMap = new Map(Object.entries(myInfo));
// console.log(myMap)
// console.log(myMap.size);
// console.log(myMap.has("role"))
// // Needed Output
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// // 3
// // true

// Exo 04

// let theNumber = 100020003000;
// console.log(+[...new Set(Array.from(theNumber.toString()))].filter((e) => +e > 0 ).join(""));
// Needed Output
// 123

// Exo 05

// let theName = "Elzero";

// console.log(Array.from(theName));
// console.log(theName.split(""));
// console.log(new Array(...theName));
// console.log(Oobject.assign([],theName));
// console.log(Array.of(...theName))

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// Exo 06

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// chars.sort( function( a , b){
//     if(typeof(a) === typeof("s")) return 1;
//     if(!isNaN(a)) return -1;
//     return 0;
// });
// let nums = chars.filter((e) => !isNaN(e))
// let copyChars = chars.copyWithin(0,nums.length, nums.length * 2)
// console.log(copyChars)

// Exo 07

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log(numsOne.concat(numsTwo));
// console.log([...numsOne,...numsTwo]);
// console.log(Array.of(...numsOne,...numsTwo));
// let arr = [];
// arr.push(...numsOne)
// arr.push(...numsTwo)
// console.log(arr);

// let arr2 = [];
// numsOne.forEach((e) => arr2.push(e));
// numsTwo.forEach((e) => arr2.push(e))
// console.log(arr2);

// Exo 08

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1,...n2].length)
// Needed Output
// 210