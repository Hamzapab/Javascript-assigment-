

// Exo 02

let img = document.images;
console.log(img)
for (i = 0; i < img.length; i++){
    img[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
    img[i].setAttribute("alt", "Elzero Logo")
}
