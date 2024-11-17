'use strict';
const target2= document.querySelector('#target2');
let n= prompt("Enter your name: ");
console.log("Hello, "+n+"!")
target2.innerHTML = `Hello, ${n}!`;