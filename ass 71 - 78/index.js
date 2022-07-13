// Exo 01
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newMix = mix.map(function(ele){
//     if (isNaN(ele)){
//         return ele
//     }else{
//         return ""
//     }
// }).reduce(function(pre , acu){
//     return pre + acu;
// })
// console.log(newMix)

// Exo 02
// let myString = "EElllzzzzzzzeroo";

// let newstring = myString.split("").filter(function(ele ,i ){

//     return myString.indexOf(ele) == i;
// }).join("")
// console.log(newstring)

// Exo  03
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let solution = myArray.reduce(function(pre, acu){
//     return pre.concat(acu)
// },[]).join("")
// console.log(solution)

// Exo 04

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let numbers = numsAndStrings.filter(function(ele){
//     return !isNaN(ele)
// }).map(function(ele){
//     return -ele
// })

// console.log(numbers)

//  Exo 05

let nums = [2, 12, 11, 5, 10, 1, 99];
let score = nums.reduce(function(pre , acu){
    if (acu % 2 == 0){
        return pre * acu
    }
    else {
        return pre + acu
    }
}, 1)

console.log(score)
