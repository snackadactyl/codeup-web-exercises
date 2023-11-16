// // // console.log("hello from break and continue!");
// //
// // while (true) {
// //     let userInput = prompt("Enter an odd number between 1 and 50:");
// //     let number = parseInt(userInput);
// //     if (number >= 1 && number <= 50 && number % 2 !== 0) {
// //         break;
// //     } else {
// //         alert("Not an odd number. Please enter a valid odd number between 1 and 50.");
// //     }
// // }
// //
// // console.log("You entered a valid odd number: " + `number`);
//
// let userInput = prompt("Enter an odd number between 1 and 50:");
// let userNumber = parseInt(userInput);
// if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !==0) {
//     for (let i = 1; i <= 50; i +=2) {
//         if (i === userNumber) {
//             continue;
//         }
//         console.log(i);
//     }
// } else {
//     console.log("Invalid input. Enter a valid odd number between 1 and 50.");
// }