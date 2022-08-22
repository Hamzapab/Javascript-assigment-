// Exo 01

// class Car {
//   constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   run() {
//     return "Car is Running Now";
//   }
//   stop(){
//     return "car is stopped";
//   }
// }

// let car1 = new Car("p208","hd",2000);
// let car2 = new Car("Clio 4","hdi",3000);
// let car3 = new Car("campus","dci",4000);
// console.log(`Car one name is ${car1.n},and model is ${car1.m} and price is ${car1.p}`)
// console.log(car1.run());

// Exo 02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// class Tablet extends Phone {
//   constructor(name,serial,price,size){
//     super(name,serial,price);
//     this.size = size;
//   }
//   fullDetails(){
//     return `${this.name} Serial is ${this.serial} And size is ${this.size || "unkown"}`
//   }
// }
// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown

// Exo 03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }
//   get creditNumToStrin() {
//     let cardNumber = this.#c;
//     let regExp = /\d{4}/g;
//     let newCardNumber = cardNumber.toString().match(regExp).join("-");
//     return newCardNumber;
//   }
//   showData(){ 
//     return `Hello ${this.u} Your credit Crad number is ${this.creditNumToStrin}`
//   }
// }

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData());
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData());
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData());
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// Exo 04 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Object.prototype.addLove = function(){
//   return "I love Elzero Web School"
// }
// let myStr = "Elzero";
// console.log(myStr.addLove())

// Exo 05 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj,{
  score:{
      writable : false,
  },
  id:{
    enumerable : false,
  },
  country:{
    configurable : true,
  }
})
delete myObj.country
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
