// Exo 04 
let one = document.getElementsByClassName("one")[0]
let two = document.getElementsByClassName("two")[0]

console.log(one)
console.log(two)

let oneAtrr = one.getAttribute("title")
console.log(oneAtrr)
let twoAtrr = two.getAttribute("title")
console.log(twoAtrr)

one.setAttribute("title",twoAtrr)
one.innerHTML = twoAtrr
two.setAttribute("title",oneAtrr)
two.innerHTML = `${oneAtrr} ${twoAtrr.length + twoAtrr.lastIndexOf()}`
