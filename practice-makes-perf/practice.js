// /////////////////////////////////
// // TERNARY OPERATOR
// // /////////////////////////////
// // // let someNumber = prompt("Enter number");
// // //
// // // // let consoleLogVariable;
// // // // if(someNumber % 2 === 0) {
// // // //     console.log("even");
// // // // }else {
// // // //     console.log("odd");
// // // // }
// // // let consoleLogVariable;
// // // consoleLogVariable = someNumber % 2 === 0 ? "even" : "odd";
// // // console.log(consoleLogVariable);
// //
// //
// // let userAnswer = prompt ("What color is a tree");
// //
// // let correctOrNotMessage = userAnswer === "green" ? "You are correct" : "You are not correct";
// // // console.log(correctOrNotMessage);
// //
// // const userColor = prompt("Enter a color");
// //
// // let colorMessage = userColor === 'blue' ? 'The sky is blue' : userColor === 'red' ? 'Strawberries are red' : `I don't know about ${userColor}`;
// // console.log(colorMessage);
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // TEMPLATE LITERALS
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // //Normal String Concat
// // let someName = prompt("Enter a name");
// //
// // //I want my message to say "Your name is: "
// //
// // console.log("Your name is " + someName);
// //
// // //TEMPLATE LITERALS NEED THE STRING TO BE WRAPPED IN BACKTICKS (``)
// // //${}
// // console.log(`Your name is ${someName}`);
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // NaN
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// // console.log(NaN === NaN); //false
// //
// // console.log(isNaN(NaN)); //true
//
// // let userAnswer= prompt("Enter either a number or not a number");
// // console.log(userAnswer);
// //
// // let userAnswerisANumber =!isNaN(userAnswer);
// // console.log(userAnswerisANumber);
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Functions
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// //Function syntax (skeleton)
// function functionName(parameter1, paramenter2) {
//     //function code goes here
//
//     //we can return but we don't need to
//     return "something";
//
//     //js stops running after it reads return!
//
//     console.log("This won't run");
// }
// //
// //arrow function syntax:
// const functionName = (parameter1, parameter2) => {
//     return "something";
//     console.log("This won't run");
// }
// //to run function we need to CALL it
//
// functionName("123", "abc");
//
//





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Conditionals
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//If / Else Syntax

/* this is a comment */

// if(/*condition goes here, it MUST boil down to true or false*/) {
//     //Code that runs if and ONLY IF the condition is TRUE
// } else {
//     //code that runs if and only if the condition is FALSE
// }
// //This will run like normal again

//Create a function that accepts a grade (0-100) and returns
//the corresponding Letter Grade (A, B, C, D, F)

function convertGrade(grade) {
    let letterGrade;
    //Conditional Statements that set the letter grade
    if(grade >= 90) {
        letterGrade = 'A';
    } else if(grade >= 80) {
        letterGrade = 'B';
    } else if(grade >=70) {
        letterGrade = 'C';
    } else if(grade >=60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F';
    }
    return letterGrade;
}

//SWITCH STATEMENT: BUT don't use switch statement for this example
// function convertGrade(grade) {
//     let letterGrade;
// switch(grade) {
//     case grade >=90:
//         letterGrade= 'A';
//         break;
//     case grade >=80:
//         letterGrade= 'B';
//         break;
//     case grade >=70:
//         letterGrade= 'C';
//         break;
//     case grade >=60:
//         letterGrade= 'D';
//         break;
//     default:
//         letterGrade = 'F';
//         break;
// }
// return letterGrade;
// }