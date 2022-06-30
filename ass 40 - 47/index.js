//  uncomment the exo you want to test "because of repeating variables u may have error so comment other exo and just let the one u wanna check "
// exo 01
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(num - num , num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.splice(num - num ,num)); // ["Ahmed", "Elham", "Osama"];
// exo 02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
console.log(friends.splice(true,true + true)); // ["Eman", "Osama"]

// exo 03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo.splice(true + true,true),
                           arrOne.reverse(),arrTwo.slice(true - true).reverse())); // ["Z", "X", "D", "C", "B", "A"]

// exo 04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2].splice(0,website.length - true).join().slice(website.length).toUpperCase()); // ZERO

// exo 05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// 01 
if ((haystack.includes(needle)) == 1){
    console.log("found");
}
else{
  console.log("not found")
}
// 02
(haystack.includes(needle)) == 1 ? 
  console.log("found") : console.log("not found")
// 03 
switch (haystack.includes(needle)){
    case true: 
    console.log("found")
    break;
    case !true:
      console.log("not found")
      break;
}

//  Exo 06
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr2.splice(true + true , true) ,arr1.slice(true + true),arr2.splice(arr1.length - true)).join("").toLocaleLowerCase()); // fxy