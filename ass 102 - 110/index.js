// Exo 01
// let numbers = prompt("Print number from - to "  ,"numberX-numberY");

// if (+numbers.split("-")[0] < +numbers.split("-")[1] ){
//     var smallNumber = numbers.split("-")[0];
//     var bigNumber = numbers.split("-")[1];
// }else{
//     var bigNumber = numbers.split("-")[0];
//     var smallNumber = numbers.split("-")[1];
// }
// for (i = 0 ; i <= (+bigNumber - +smallNumber); i++){
//     console.log(+smallNumber + i)
// }

// Exo 02

// let popup = document.createElement("div");
// let spanOne = document.createElement("span");
// let btn = document.createElement('button');
// btn.textContent = "X"
// btn.style.cssText = "background-color : #FF0206 ;cursor : pointer;width : fit-content ; position : absolute; right : -15px; top : -15px;border : none ; color : white; border-radius : 50% ; width : 30px; height : 30px"
// spanOne.textContent = "Welcome"
// spanOne.style.cssText = "padding : 0 0 20px 0 ; font-weight : bold; font-size : 30px;"
// let spanTwo = document.createElement("span");
// spanTwo.textContent = "Welcome to Elzero web school";
// popup.append(spanOne, spanTwo)
// document.body.append(popup)
// popup.style.cssText = "margin : 50px auto ;width : 300px ; background-color : #F5F3F4 ; padding : 60px 0;text-align : center;  display: flex; flex-direction: column; position : absolute; top : 0px ; right : 40%;"
// popup.append(btn)
// popup.focus();
// popup.style.display = "none";

// function displayingPop(){
//     popup.style.display = "flex";
// }
// setTimeout(displayingPop , 5000);

// btn.onclick = function (){
//     popup.style.display = "none"
// }

// Exo 03
// let myDiv = document.createElement("div")
// myDiv.textContent ="10";
// document.body.prepend(myDiv);

// function countDouwn (){
//     myDiv.innerHTML = myDiv.innerHTML - 1;
//     if (myDiv.innerHTML == 0){
//         clearInterval(timer)
//     }
// }
// let timer = setInterval(countDouwn, 1000)

// Exo 04
// let myDiv = document.createElement("div")
// myDiv.textContent ="10";
// document.body.prepend(myDiv);

// function countDouwn (){
//     myDiv.innerHTML = myDiv.innerHTML - 1;
//     if (myDiv.innerHTML == 0){
//         window.open("https://ELzero.org")
//         clearInterval(timer)
//     }
// }
// let timer = setInterval(countDouwn, 1000)

// Exo 05
let myDiv = document.createElement("div")
myDiv.textContent ="10";
document.body.prepend(myDiv);

function countDouwn (){
    myDiv.innerHTML = myDiv.innerHTML - 1;
    if (myDiv.innerHTML == 0){
        window.open("https://ELzero.org", "_blanc", "height=400,width=200 ,top=0,left=1000")
        clearInterval(timer)
    }
}
let timer = setInterval(countDouwn, 1000)