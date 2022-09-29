let tempString = 'mystring';
let tempString2 = 'mystring2';

let result1 = tempString + true;
console.log('addition ' + result1);
let result2 = tempString2 + 1;
console.log('addition ' + result2);
let result3 = 3 + true;
console.log('addition ' + result3);

let result4 = tempString * true;
console.log('multiplication ' + result4);
let result5 = tempString2 * 1;
console.log('multiplication ' + result5);
let result6 = 3 * true;
console.log('multiplication ' + result6);

let result7 = tempString / true;
console.log('division ' + result7);
let result8 = tempString2 / 1;
console.log('division ' + result8);
let result9 = 3 / new Boolean(true);
console.log('division ' + result9);

let temp1 = new Number('123');
console.log(temp1);

let temp2 = new String(123);
console.log(temp2);

let temp3 = new Boolean(123);
console.log(temp3);