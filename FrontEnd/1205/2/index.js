//wraapper function
/*
console.log("ok");
console.log(_dirname);      //file name
console.log(_filename);     //elérési utvonal
//abszolut könyvtár     https://hu.wikipedia.org/wiki/El%C3%A9r%C3%A9si_%C3%BAt
console.log(module);        
console.log(require);       //
console.log(exports);       //
*/

console.log("Hello World!");
const add = require('./calculator.js');
console.log(add(2, 3));
require('http');