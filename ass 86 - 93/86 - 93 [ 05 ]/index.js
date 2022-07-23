// Exo 05
let img = document.getElementsByTagName("img")
console.log(img)

for (i = 0; i < img.length;i++){
    if ( img[i].hasAttribute("alt") === true){
        img[i].setAttribute("alt","old")
    }else{
        img[i].setAttribute("alt","elzero")
    }
}