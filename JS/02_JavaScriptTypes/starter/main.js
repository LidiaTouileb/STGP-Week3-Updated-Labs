let numTest = 45.324568;
console.log(numTest);
let twoDecimalPoints = numTest.toFixed(2);
console.log(twoDecimalPoints);
let stringTest = `I am the very model of a modern major general`;
let indexOfM = stringTest.indexOf(`M`);
stringTest = stringTest.toUpperCase();
console.log(indexOfM);
let start = stringTest.indexOf("MODEL");
let end = stringTest.lastIndexOf('MAJOR');
console.log(start)
console.log(end)
let subStr = stringTest.substring(start, end);
console.log(subStr);
document.write("<p>" + subStr + "</p>");