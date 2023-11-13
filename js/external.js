console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color:')
alert(`Great, ${userInput} is my favorite color too!`);

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



let dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
let mermaidDaysRented = Number(prompt("How many days would you like to rent 'The Little Mermaid'?"));
let brotherBearRented = Number(prompt("How many days would you like to rent 'Brother Bear'?"));
let herculesRented = Number(prompt("How many days would you like to rent 'Hercules'?"));
let totalCost = (mermaidDaysRented + brotherBearRented + herculesRented) * dailyRentalRate;
let alertMsgRental = ("You owe $" + totalCost );
alert(alertMsgRental);


let googleRate = Number(prompt("What is your google rate per hour?"));
let amazonRate = Number(prompt("What is your amazon rate per hour?"));
let facebookRate = Number(prompt("What is your facebook rate per hour?"));
let googleHours = Number(prompt("How many hours did you work at google?"));
let amazonHours = Number(prompt("How many hours did you work at amazon?"));
let facebookHours = Number(prompt("How many hours did you work at facebook?"));

let totalPay= (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
let alertPay = "Your total pay is: $" + totalPay;
alert(alertPay);