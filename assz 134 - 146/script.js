// Exo 01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipReg = /\d{4}:\w{3}(:\d{4}){5}/ig;
console.log(ipReg.test(ip));

// Exo 02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesReg = /os\d*o/ig;
console.log(specialNames.match(specialNamesReg));
// Output
// ['Os10O', 'OsO', 'Os100O']

// Exo 03
let phone = "+(995)-123 (4567)";

let phoneReg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phoneReg));

// Exo 04
let reg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;

//  [opt] mean that this is not obligated , the user can wirte it or not
// https?  s is [opt]
// ://
//( - and word one or more end with .) all this we can escape it
// - and word one or more end with .
// word or more
// . after it word or more  [opt]
//  /  [opt] after it any character [null or more]

//  Exo 05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|(\s-\s)|\s)\d{2}(\/|(\s-\s)|\s)\d+/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// Exo 06
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlRe = /(https?)?(:\/\/)?(www.)?\w+.org(:\d{4}.+)?/ig; // Write Your Pattern Here

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));