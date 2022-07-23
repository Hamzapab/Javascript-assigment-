// Exo 03

let usPrice = document.getElementById("us");
let egPrice = document.getElementById("eg");
let inputDollar = document.querySelector("input");

inputDollar.oninput  = function getFieldValue(){
    let fieldValue = document.querySelector("input").value;
    usPrice.innerHTML = fieldValue;
    egPrice.innerHTML = (usPrice.innerHTML * 15.6).toFixed(2);
}


