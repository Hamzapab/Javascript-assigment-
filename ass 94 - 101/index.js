// !!!!!!!!!!!only uncomment one code to read it!!!!!!!!!!!!
//  unccomment code between Exo number!!!!

// Exo 01 it is in the inline script file

//  EXO 02 **********************************************
// let inputAdd = document.querySelector(".classes-to-add");
// let inputRemove = document.querySelector(".classes-to-remove");
// let myDiv = document.querySelector(".classes-list div");
// let Current = document.querySelector("[title = 'Current']");



// function addClasses() {
// //   document.querySelectorAll("span").forEach((ele) => ele.remove());
// for (let i = 0; i < this.value.split(" ").length; i++) {
//     if (inputAdd.value.length > 0) {
//         Current.classList.add(inputAdd.value.toLowerCase().split(" ")[i]);
//     }
//     if (inputRemove.value.length > 0) {
//     Current.classList.remove(inputRemove.value.toLowerCase().split(" ")[i]);
//     }
// }
// addClassesToSpan();
// this.value = "";
// }

// function addSpans() {
// if (Current.classList.length === 0) {
//     myDiv.textContent = "No Classes To Show";
// } else {
//     myDiv.textContent = "";
//     Current.classList.value.split(" ").sort().forEach((element) => {
//     let myspan = document.createElement("span");
//     myspan.className = `${element}-span`;
//     myspan.append(element);
//     myDiv.append(myspan);
// });
// }
// }
// addSpans();
// inputAdd.onblur = addClasses;
// inputRemove.onblur = addSpans;



// EXO  03 *********************************************
// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div")


// myP.remove()

// let myStartDiv = document.createElement("div");
// let startDivTxt = document.createTextNode("Start")
// myStartDiv.append(startDivTxt);
// myStartDiv.className = "start";
// myStartDiv.title = "Start element";
// myStartDiv.setAttribute("data-value", 'start')
// myDiv.before(myStartDiv);

// let myEndDiv = document.createElement("div");
// let endDivTxt = document.createTextNode("End")
// myEndDiv.append(endDivTxt);
// myEndDiv.className = "End";
// myEndDiv.title = "End element";
// myEndDiv.setAttribute("data-value", 'end');
// myDiv.after(myEndDiv);

// Ex0 04 ***************************************************

// console.log(document.querySelector("div").lastChild.trim());

// Exo 05 ****************************************************

let myDiv = document.querySelector("div");
let mySpan = document.querySelector("span");
let myP = document.querySelector("p");
let myArticle = document.querySelector("article");
let mySection = document.querySelector("section");
document.body.style.cursor = "pointer";
let arr1 = [myDiv, mySpan, myP, mySection,myArticle]

arr1.forEach(function (ele){
        ele.onclick = function(){
            console.log(`This is ${ele.nodeName}`)
        }
    })








