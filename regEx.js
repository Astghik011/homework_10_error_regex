// Task 2.1
// Write a function to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-
// 9).

// Solution

// function regEx(str){
//     const reg = /^[a-zA-Z0-9]*$/; //  /^[\d\w]*$/
//     return reg.test(str);
// }

// console.log(regEx("Hello123"));

// Task 2.2
// Create a RegExp myRegExp to test if a string is a valid pin or not.
// A valid pin has:

// Exactly 4 or 6 characters.
// Only numerical characters (0-9).
// No whitespace.

// Solution
// const myRegExp = /^[\d]{4}$|^[\d]{6}$/ // /^[0-9]{4}$|^[0-9]{6}$/

// Input                    Output
// console.log(myRegExp.test("1234"))    //true
// console.log(myRegExp.test("45135"))   //false
// console.log(myRegExp.test("89abc1"))  //false
// console.log(myRegExp.test("900876"))  //true
// console.log(myRegExp.test(" 4983"))   //false


// Task 2.3

// const REGEXP = /abc/;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// str.match(REGEXP);
// '<a href="/">', '<input type="radio" checked>', "<b>";