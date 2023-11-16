// console.log("Inside loops.js");
// //
// // // let counter = 0;
// // //
// // // while (counter <12) {
// // //     console.log("------------------")
// // //     console.log("Inside while loop. Counter is " + counter);
// // //
// // //     counter++;
// // //
// // //     console.log(`End of while loop code block, counter is currently ${counter}`);
// // // }
// // //
// // // con
// //
// //
// // //Do While Loop
// //
// // // let counter = 0;
// // // do {
// // //     console.log("------------------")
// // //     console.log("Inside while loop. Counter is " + counter);
// // //
// // //     counter++;
// // //
// // //     console.log(`End of while loop code block, counter is currently ${counter}`);
// // //
// // // } while(counter < 12);
// // // console.log("***** After do while loop *****");
// // // console.log(counter);
// //
// //
// // //For Loop
// //
// // //For Loop Syntax
// // //
// // // for(let i = 0; i < 15; i++) {
// // // console.log(i);
// // // }
// //
// // //make loop that counts by two from 0 - 100
// //
// // for(let i = 0; i <=100; i++) {
// //     if(i % 2 !== 0) {
// //         continue;
// //     }
// //     console.log(i);
// // }
//
// //
// // LOOP EXERCISES
//
// //Number 2 create multiplication table for 7
// // function showMultiplicationTable(number) {
// //     for (let i = 0; i <=10; i++) {
// //         console.log(`${number} x ${i} = ${number * i}`)
// //     }
// //
// // }
// // showMultiplicationTable(7);
//
//
// //Number 3 create for loop with 10 random numbers 20-200, output if it's odd or even
// // for (let i=0; i < 10; i++) {
// //     const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
// //     const result = randomNumber % 2 === 0 ? 'even' : 'odd';
// //
// //     console.log(`Random number ${randomNumber} is ${result}`);
// // }
//
//
// //Number 4 create a for loop that uses console.log to show 1 22 333 4444 55555 etc. up to 9
//
// // for (let i = 1; i <=9; i++) {
// //     let output = ''
// //     for(let x=1; x <= i; x++) {
// //         output += i;
// //     }
// //     console.log(output);
// // }
//
// //Number 5 create a for loop that uses console.log to output 100 down to 5 in decrements of 5
//
// for (let i = 100; i >=5; i -=5 ) {
//     console.log(i);
// }