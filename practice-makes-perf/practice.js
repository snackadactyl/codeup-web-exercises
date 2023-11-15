// // if(/*bobber goes underwater */) {
// //     //reel in our fishies
// // } else if (/* we have been sitting more than 10 minutes*/) {
// //     recast the line
// // } else {
// //     //wait for that fishy
// // }
//
// console.log("Inside practice.js")
//
// let haveADuck = true
// alert(haveADuck)
//
// let favoriteColor = 'blue';
// favoriteColor = 'black';
// console.log(favoriteColor)
//
// function sumThreeAndDivide(n1,n2,n3,n4){
//     return (n1+n2+n3) / n4
// }
// sumThreeAndDivide(10,20,30,5)
//
// function morePowwwwwa(robot, duck){
//     console.log( Math.pow(robot,duck) )
// }
// morePowwwwwa(4,2)
//
// function alertOrLog(b,str){
//     if(b){
//         alert(str)
//     } else{
//         console.log(str)
//     }
// }

function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
       if(i % 3 === 0){
           console.log('Fizz')

       }else if(i % 5 === 0){
           console.log('Buzz')
       }else if(i % 3 === 0 && i % 5 === 0){
           console.log('FizzBuzz')
       }else{
           console.log(i)
       }
    }
}
