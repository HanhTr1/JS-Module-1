'use strict';
const target3 =document.querySelector('#target3')
let x= parseInt(prompt("Enter number x: "));
let y= parseInt(prompt("Enter number y: "));
let z= parseInt(prompt("Enter number z: "));

let sum= x+y+z;
console.log("Sum of 3 numbers is: ",sum)
let product= x*y*z;
console.log("The product of 3 number is: ",product);
let average= sum/3;
console.log("The average of 3 numbers is: ",average);
target3.innerHTML=`The sum is ${sum}, the product is ${product}, the average is ${average}`;