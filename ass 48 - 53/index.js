// Exà 02
// let start = 10;
// let end = 100;
// let exclude = 40;

// for(i = start ;i <= end; i= i + start){
//   if (i == exclude){
//     continue;
//   }
//   console.log(i);
// }
// Exo 02
// let start = 10;
// let end = 0;
// let stop = 3;

// for(i = start; i >= stop ; i--){
//     if (i < 10){
//         i = "" + end + i
//     }
//     console.log(i)
// }
//  Exo 03
// let start = 1;
// let end = 6;
// let breaker = 2;

// for(i = start; i <= end; i++){
//     console.log(i);
//     console.log(`--${breaker}`);
//     console.log(`--${breaker * breaker}`)
// }
// Exo 04
// let index = 10;
// let jump = 2;
// let end = 0;

// for (i = index; i >= (jump * jump); i = i - jump) {
//     console.log(i)
// }
// Exo 05
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let j = letter.length;
// for (i = letter.indexOf('a'); i < friends.length; i++){
//     if(friends[i].startsWith(letter.toUpperCase()) === true){
//         continue;
//     }
//     if (j < friends.length){
//     console.log(`${j}==> ${friends[i]}`);
//     j = j + 1;
//     }
// }
// Exo 06
// let start = 0;
// let swappedName = "elZerO";
// let check = swappedName.split("")
// for(i= start; i < swappedName.length; i++){
//     if(((check[i]) === check[i].toUpperCase()) === true ){
//         check[i] = check[i].toLowerCase();
//     }
//     else {
//         check[i] = check[i].toUpperCase();
//     }
// }
// console.log(check.join("").toString());
// Exo 06
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (i = start ; i < mix.length ; i++){
    if((typeof(mix[i]) == typeof(start) )=== true){
        if(mix[i] === +true){
            continue;
        }
        console.log(mix[i])
    }
}

