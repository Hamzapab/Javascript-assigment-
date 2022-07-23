// Exo 06
let form = document.getElementsByTagName("form")[0]
let btnCreate = document.getElementsByName("create")[0]
let container = document.querySelector(".results")
let nElement = document.getElementsByName("elements")[0]
let eText = document.getElementsByName("texts")[0]
let etype = document.getElementsByName("type")[0]
// Style css
form.style.cssText = "display : flex; flex-direction : column; "
container.style = "display: flex; justify-content: space-between; flex-wrap: wrap; " ;
btnCreate.style.cssText = "color : white; border:none; background-color : blue; border-radius: 3px; cursor : pointer; width : 200px ; margin : auto"
nElement.style.cssText = "width : 200px ; margin : auto"
eText.style.cssText = "width : 200px ; margin : auto"
etype.style.cssText = "width : 200px ; margin : auto"
// start coding 
btnCreate.onclick = function (event){
    container.innerHTML = "";
    let nValue = nElement.value;
    let textValue = eText.value;
    let nType = etype.value.toLowerCase();
    for (i = 0; i < nValue; i++){
        let createle = document.createElement(`${nType}`);
        let txtCreated = document.createTextNode(`${textValue}`);
        container.appendChild(createle);
        createle.appendChild(txtCreated);
        createle.className = "box";
        createle.id = `id_${i + 1}`
        createle.style.cssText = "background-color : orange; width : fit-content; padding : 10px 40px; margin : 15px ;"
    }
    event.preventDefault();
}







