'use strict';
function checkLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      result='is a leap year';
        console.log("This year " + year + " is a leap year");
    } else {
      result='is not a leap year';
        console.log("This year " + year + " is not a leap year");
    }
}
let year = prompt("Enter a year:");
let result;
checkLeapYear(year);

const target5 = document.querySelector('#target5');
    target5.innerHTML=`${year} ${result} `;
