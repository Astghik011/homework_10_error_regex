// Task 1.1

// Complete the reverseString function, it has one parameter s. You must perform the following actions:
// . Try to reverse string s using the split, reverse, and join methods.
// . If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// . Print s on new line. If no exception was thrown, then this should be the reversed string, if an
// exception was thrown, this should be the original string.


// Solution

// function reverseString(s){
//     if(typeof s === "number" || typeof s === "object"){
//         throw new TypeError("You can't reverse numbers and objects. Please, input a string.")
//     } return s.split(" ").reverse().join(" ");
// }

// const str = "JS is life"
// console.log(reverseString(str));
// console.log(reverseString(85));


// Task 1.2

// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:
// . If a is 0, throw an Error with message = Zero Error.
// . If a is negative, throw an Error with message = Negative Error.

// Solution

// function isPositive(a){
//     if(a > 0){
//         return "YES";
//     } else if(a === 0){
//         throw new Error("Zero Error");
//     } else{
//         throw new Error("Negative Error")
//     }
// }

// console.log(isPositive(123));
// console.log(isPositive(-1));
// console.log(isPositive(0));


// Task 1.3

// Convert the code using try...catch.

// function mapArray(arr) {
//    return Array.isArray(arr)
//      ? arr.map((item) => item * 2)
//      : "map is not a function";
// }

// Solution

// function mapArray(arr) {
//     try{
//         Array.isArray(arr)
//             return arr.map((item) => item * 2)
        
//     } catch(err) {
//         throw new Error("map is not a function");
//     }
// }

// console.log(mapArray([1,2,3]));
// console.log(mapArray(5));



// Task 1.4

// A teacher has created a gradeLabs function that verifies if student programming labs work. This function
// loops over an array of JavaScript objects that should contain a student property and runLab property.
// The runLab property is expected to be a function containing the student's code. The runLab function is
// called and the result is compared to the expected result. If the result and expected results don't match,
// then the lab is considered a failure.
// The gradeLabs function works for the majority of cases. However, what happens if a student named their
// function incorrectly? Run gradeLabs and pass it studentLabs as defined below.

let studentLabs = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];

const expected = 25;
function gradeLabs(students){
    try{
        if(students.runLab(5) === expected){
                return "Your answer is right."
            } 
            return "Your answer is wrong."
        
    } catch(err){
        throw new Error(`${err.name}. "Error thrown"`)
    }
}

console.log(gradeLabs(studentLabs));

// Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined.
// If the exception is thrown, the result should be set to the text "Error thrown".