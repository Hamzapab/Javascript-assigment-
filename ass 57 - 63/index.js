// "Notice " uncomment One code per time
//  Exo 01
// function sayHello(theName, theGender) {
//     typeof(theGender) !== typeof("a") ?
//     console.log(`Hello ${theName}`) :
//     theGender.toLowerCase() === "male" ? 
//     console.log(`Hello Mr ${theName}`) :
//     theGender.toLowerCase() === "female" ?
//     console.log(`Hello Miss ${theName}`) :
//     console.log("Error")
// }
// // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

//    Exo 02

// function calculate(firstNum, secondNum, operation) {
//     typeof(operation) === typeof(undefined) && typeof(secondNum) === typeof(1) ?
//     console.log(firstNum + secondNum) :
//     typeof(secondNum) === typeof(undefined) && typeof(operation) === typeof(undefined) ?
//     console.log("Second Number Not Found") :
//     operation.toLowerCase() === "add" ?
//     console.log(firstNum + secondNum) :
//     operation.toLowerCase() === 'subtract' ?
//     console.log(firstNum - secondNum) :
//     operation.toLowerCase() === "multiply" ?
//     console.log(firstNum * secondNum) :
//     console.log(firstNum + secondNum) 
    
// } 
 
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

//  EXo 03
// function ageInTime(theAge) {
//     if (theAge > 10 && theAge < 100){
//         console.log(`${theAge * 12} month`)
//         console.log(`${theAge * 52} week`)
//         console.log(`${theAge * 365} day` )
//         console.log(`${theAge * 8760} hour`)
//         console.log(`${theAge * 525600 } minute`)
//     }else {
//         console.log("Age out of RAnge")
//     }
// }  
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months

// exo 04
// function checkStatus(a, b, c) {
//     let name ;
//     let age ;
//     let status;
//     let arr1 =[a , b, c];
//     for (i = 0; i < arr1.length;i++){
//         typeof(arr1[i]) === typeof("a") ?
//         name = arr1[i] :
//         typeof(arr1[i]) === typeof(1) ?
//         age = arr1[i] :
//         arr1[i] === true ?
//         status = " You Are Available For Hire" :
//         arr1[i] === false ?
//         status = " You Are NoT Available For Hire":
//         console.log("error")
//         }
//     console.log(`Hello ${name}, Your age is ${age},${status}`)
// }
//   // Needed Output
//   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Exo 05
// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for (i = 0; i <= (endYear - startYear); i++){
        
//         document.write(`<option value="${startYear + i}"> ${startYear + i}</option>`)
        
//     }
//     document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// Exo 06
function multiply(...num){
    let x = 1;
    for (i = 0; i < num.length;i++){
        if (!isNaN(num[i])){
        x =  x * Math.trunc(num[i])
        }
    }
    console.log(x)
}
multiply(10, 20,); // 200
multiply("A", 10 , 30); // 300
multiply(100.5, 10, "B"); // 1000
