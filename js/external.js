console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color:')
console.log(`Great, ${userInput} is my favorite color too!`);

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to understand how real
// world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
//     and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
//     how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//     rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//     You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.



// var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
var dailyRentalRate = parseInt(prompt("How much is the daily rental rate?"));
var mermaidDaysRented = Number(prompt("How many days would you like to rent 'The Little Mermaid'?"));
var brotherBearRented = Number(prompt("How many days would you like to rent 'Brother Bear'?"));
var herculesRented = Number(prompt("How many days would you like to rent 'Hercules'?"));
var totalCost = (mermaidDaysRented + brotherBearRented + herculesRented) * dailyRentalRate;
var alertMsgRental = ("You owe $" + totalCost );
alert(alertMsgRental);
