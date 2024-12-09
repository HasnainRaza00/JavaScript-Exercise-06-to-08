// Question no. 01
// Solution
/*
document.write("Result: <br/>");
let a = 10;
document.write(`The value of a is ${a} <br/><br/>`);
document.write(`The value of ++a is ${++a} <br/>`);
document.write(`Now the value of a is: ${a}<br/><br/>`);
document.write(`The value of a++ is: ${a++} <br/>`);
document.write(`Now the value of a is: ${a} <br/><br/>`);
document.write(`The value of --a is: ${--a} <br/>`);
document.write(`Now the value of a is: ${a} <br/><br/>`);
document.write(`The value of a-- is: ${a--} <br/>`);
document.write(`Now the value of a is: ${a}`);
*/

// Question no. 02
// Solution Incorrect solution
/*
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
console.log(result);
document.write(`${--a} <br/>`);
document.write(`${a - --b} <br/>`);
document.write(`${a - b + ++b} <br/>`);
document.write(`${a - b + b + b--}`);
*/

// Question no. 03
// Solution
/*
let userInput = prompt("Enter complete name");
document.write(`Hi, ${userInput}. Welcome to our website.`);
*/

// Question no. 05
// Solution
/*
let userInput = prompt("enter table number", "5");
document.write(`${userInput} x 1 = ${userInput*1}<br/>`);
document.write(`${userInput} x 2 = ${userInput*2}<br/>`);
document.write(`${userInput} x 3 = ${userInput*3}<br/>`);
document.write(`${userInput} x 4 = ${userInput*4}<br/>`);
document.write(`${userInput} x 5 = ${userInput*5}<br/>`);
document.write(`${userInput} x 6 = ${userInput*6}<br/>`);
document.write(`${userInput} x 7 = ${userInput*7}<br/>`);
document.write(`${userInput} x 8 = ${userInput*8}<br/>`);
document.write(`${userInput} x 9 = ${userInput*9}<br/>`);
document.write(`${userInput} x 10 = ${userInput*10}`);
*/

// Question no. 06
// Solution

// Taking Subjects from user

// let subjectOne = prompt("Enter First Subject");
// let subjectTwo = prompt("Enter Second Subject");
// let subjectThree = prompt("Enter Third Subject");

// Total marks of all subjects

// let subjectTotalMarks = 100;
// let totalMarksAllSub = 300;

// Obtained marks of subjects

// let obtMarksFirstSub = +prompt("Enter obtained marks of first subject");
// let obtMarksSecondSub = +prompt("Enter obtained marks of second subject");
// let obtMarksThirdSub = +prompt("Enter obtained marks of third subject");
// let totalObtainedMarks = obtMarksFirstSub + obtMarksSecondSub + obtMarksThirdSub;

// Calculating percentage

// let perFirstSub = ((obtMarksFirstSub/subjectTotalMarks)*100);
// let perSecondSub = ((obtMarksSecondSub/subjectTotalMarks)*100);
// let perThirdSub = ((obtMarksThirdSub/subjectTotalMarks)*100);
// let totalPercentage = ((totalObtainedMarks/totalMarksAllSub)*100);

// document.write(`<table>`);
// document.write(`<tr>`);
// document.write(`<th>Subject</th>`);
// document.write(`<th>Total Marks</th>`);
// document.write(`<th>Obtained Marks</th>`);
// document.write(`<th>Percentage</th>`);
// document.write(`</tr>`);
// document.write(`<tr>`);
// document.write(`<td>${subjectOne}</td>`);
// document.write(`<td>${subjectTotalMarks}</td>`);
// document.write(`<td>${obtMarksFirstSub}</td>`);
// document.write(`<td>${perFirstSub}%</td>`);
// document.write(`</tr>`);
// document.write(`<tr>`);
// document.write(`<td>${subjectTwo}</td>`);
// document.write(`<td>${subjectTotalMarks}</td>`);
// document.write(`<td>${obtMarksSecondSub}</td>`);
// document.write(`<td>${perSecondSub}%</td>`);
// document.write(`</tr>`);
// document.write(`<tr>`);
// document.write(`<td>${subjectThree}</td>`);
// document.write(`<td>${subjectTotalMarks}</td>`);
// document.write(`<td>${obtMarksThirdSub}</td>`);
// document.write(`<td>${perThirdSub}%</td>`);
// document.write(`</tr>`);
// document.write(`<tr>`);
// document.write(`<th></th>`);
// document.write(`<th>${totalMarksAllSub}</th>`);
// document.write(`<th>${totalObtainedMarks}</th>`);
// document.write(`<th>${totalPercentage}%</th>`);
// document.write(`</tr>`);
// document.write(`</table>`);