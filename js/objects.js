(function() {
    "use strict";
console.log("Inside objects.js");

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let {firstName, lastName} = {
        firstName: "Katie",
        lastName: "Monfore",
    };
    console.log(firstName);
    console.log(lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    let person = {
        firstName: "Katie",
        lastName: "Monfore"
        };
    person.sayHello = function() {
       return `Hello from ${this.firstName} ${this.lastName}!`;
    };
console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    console.log("");
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];
shoppers.forEach(function(shopper) {
    if (shopper.amount > 200) {
        console.log("");
        console.log((shopper.name));
        console.log("$" + (shopper.amount) + " is your price before discount");
        console.log("$"  + (shopper.amount * .12) + " is your discount amount");
        console.log("$" + (shopper.amount - (shopper.amount * .12)) + " is your price after!");
    }else if(shopper.amount < 200){
        console.log(shopper.name);
        console.log("$" + (200 - shopper.amount) + (" is how much more you need to spend to qualify for a 12% discount! If you spend $200 you save $24!"));
    }
    else {
        return false;
    }
});



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    function Author(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    function Book(title, authorFirstName, authorLastName) {
        this.title = title;
        this.author = new Author(authorFirstName, authorLastName);
    }
    let books = [
        new Book("To Dye For", "Amanda", "Bobble"),
        new Book("No Kitten Around", "Bootsey", "McQueen"),
        new Book("Needled to Death", "Constance", "Anople"),
        new Book("Beet Me to it", "Tomato", "Paste"),
        new Book("Short on Cake", "Trinidad", "James"),
        new Book("Drama Llama", "Mace", "Pepper"),
        new Book("Who Did It?", "Bruce", "Meiser"),
        new Book("Lettuce Rejoice!", "Samuel", "Jackspon"),

    ];

    books.forEach(book => {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("~~~~~~~~~~~~~");
    })



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach((book, index) => {
    console.log(`Book # ${index + 1}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author ${book.author.firstName} ${book.author.lastName}`);
    console.log("~~~~~~~~~~~~~");
})
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();