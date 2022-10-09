document.querySelector("button").addEventListener("click",loadText);

function loadText(){
  

let myRequest = new XMLHttpRequest();

myRequest.open("GET","article.json");
myRequest.send();
// console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    // console.log("Data loaded");
    let mainData = JSON.parse(this.responseText);
    let divData = document.createElement("div");
    divData.setAttribute("id","data");
    document.body.appendChild(divData);
    for(let i = 0; i < mainData.length;i++){
      mainData[i]["section"] = "ALL";
      let div = document.createElement("div");
      let h = document.createElement("h3");
      h.appendChild(document.createTextNode(mainData[i][ "Name"]));
      let pArticle = document.createElement("p");
      pArticle.appendChild(document.createTextNode(mainData[i][ "body"]));
      let pAuthor = document.createElement("p");
      pAuthor.appendChild(document.createTextNode(`Section: ${mainData[i][ "section"]}`));
      let pAdress = document.createElement("p");
      pAdress.appendChild(document.createTextNode(mainData[i]["content"]));
      div.append(h,pArticle,pAuthor,pAdress);
      divData.appendChild(div)
    }
    // console.log(mainData)
    let jsonData = JSON.stringify(mainData);
    // console.log(jsonData)
  }
};



}