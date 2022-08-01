let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let age = document.getElementById("age");
let country = document.getElementById("country")

fromSt();

function addtoSt(){
    sessionStorage.setItem("fname",fName.value);
    sessionStorage.setItem("lname",lName.value);
    sessionStorage.setItem("age",age.value);
    sessionStorage.setItem("country",country[country.selectedIndex].value);
    checkAge();
}

function fromSt(){
    if (sessionStorage.getItem("fname") || sessionStorage.getItem("lname") || sessionStorage.getItem("age") || sessionStorage.getItem("country")){
    fName.value = sessionStorage.getItem("fname");
    lName.value = sessionStorage.getItem("lname");
    age.value = sessionStorage.getItem("age");
    let x = document.createAttribute("selected")
    for (i=0; i< country.options.length;i++){
        country.options[i].removeAttribute("selected");
        if (country.options[i].value === sessionStorage.getItem("country")){
            country.options[i].setAttributeNode(x)
        }
    }
    }else{
        fName.value = "First name";
        lName.value = "Last name";
        age.value = "age"
    }
}

fName.onblur = addtoSt;
lName.onblur = addtoSt;
age.onblur = addtoSt;
country.onchange = addtoSt;


let div = document.querySelector("div");

function checkAge(){
    if (isNaN(age.value)){
        let x = document.createElement("span");
        x.textContent ="X";
        x.style.cssText = "position: absolute; background-color: red;color: white;top: 0; right: 0;cursor: pointer;";
        div.append(x)
        div.style.display ='block';
        x.onclick = function (){
            div.style.display = "none";
        }
    }else{
        div.style.display ='none'
    }

}
