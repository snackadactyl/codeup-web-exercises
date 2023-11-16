// let number =2;
// while (number <= 65536) {
//     console.log(number);
//     number *= 2;
// }

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}

// Generate a random number of cones to sell between 50 and 100
let totalConesToSell = getRandomNumber(50, 100);

console.log(`Total cones to sell: ${totalConesToSell}`);

// Initialize variables
let conesSold = 0;

do {
    // Generate a random number between 1 and 5 representing cones bought by a client
    let conesBought = getRandomNumber(1, 5);

    // Check if there are enough cones to sell
    if (conesBought <= totalConesToSell) {
        // Update total cones and log the transaction
        totalConesToSell -= conesBought;
        conesSold += conesBought;
        console.log(`${conesBought} cones sold. Remaining cones: ${totalConesToSell}`);
    } else {
        // If there are not enough cones, log the available cones and break out of the loop
        console.log(`Sorry, only ${totalConesToSell} cones available. Sale aborted.`);
        break;
    }
} while (totalConesToSell > 0);

console.log(`Total cones sold: ${conesSold}`);
console.log("The ice cream seller can now go home!");
