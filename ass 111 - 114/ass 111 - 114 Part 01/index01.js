let fontList = document.getElementById("font");
let colorList = document.getElementById("color");
let sizeList = document.getElementById("size");
let myDiv = document.getElementById("myDiv");

dataFromLs()
function addData(){
    // Change color
    myDiv.style.color = colorList[colorList.selectedIndex].value;
    localStorage.setItem("color",colorList[colorList.selectedIndex].value);
    // change  font
    myDiv.style.fontFamily = fontList[fontList.selectedIndex].value;
    localStorage.setItem("font",fontList[fontList.selectedIndex].value);
    // change  size
    myDiv.style.fontSize = `${sizeList[sizeList.selectedIndex].value}px`;
    localStorage.setItem("size",sizeList[sizeList.selectedIndex].value);
}

function dataFromLs(){
    // Color from Ls
    myDiv.style.color =  localStorage.getItem("color");
    let x = document.createAttribute("selected");
    for (i=0;i < colorList.options.length;i++){
        if (colorList.options[i].innerHTML === localStorage.getItem("color")){
            colorList.options[i].setAttributeNode(x)
        }
    }
    // font from Ls
    myDiv.style.fontFamily =  localStorage.getItem("font");
    let y = document.createAttribute("selected");
    for (i=0;i < fontList.options.length;i++){
        if (fontList.options[i].innerHTML === localStorage.getItem("font")){
            fontList.options[i].setAttributeNode(y)
        }
    }
    // size from Ls
    myDiv.style.fontSize =`${localStorage.getItem("size")}px`;
    let z = document.createAttribute("selected");
    for (i=0;i < sizeList.options.length;i++){
        if (sizeList.options[i].innerHTML === localStorage.getItem("size")){
            sizeList.options[i].setAttributeNode(z)
        }
    }
}
colorList.onchange = addData;
fontList.onchange = addData;
sizeList.onchange = addData;
