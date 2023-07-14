//! Arithmetic Operator
//Addition operator (+) adds two number

const applesOnHand = 5;
const applesRecieved = 10;
const totalApples = applesOnHand + applesRecieved;
console.log(totalApples);

// Substraction operator (-) substracts one number from another

const totalTickets = 100;
const ticketSold = 45;

const ticketLeft = totalTickets - ticketSold;
console.log(ticketLeft);

//Multiplication operator (*) multiplies two numbers

//if one book costs $20 and someone buys 15 
const bookCost = 20;
const booksBrought = 15;
const totalCost = bookCost * booksBrought;

console.log(totalCost);

// Division operator (/) divides one number by another

//if there 200 pages in a book and you read 40 pages  per day, you will finish in 5 days

const totalPages = 200;
const pagePerDay = 40;
const daysToFinish = totalPages / pagePerDay;

console.log(daysToFinish);

// Remainder or module operator (%) divides one number by another and returns the remainder

//if 10 people are at a party and there are 3 pizzas, each person gets 3 slices, and 1 slice is left

const peopleParty = 10;
const pizzasAtParty = 3;
const sliceLeftOver = peopleParty % pizzasAtParty;

console.log(sliceLeftOver);

//increment operator (++) increases a number by 1

//e.g. if a website has 1000 views and then ane person visits, the website now has 1001 viewa

let currentWebsiteViews = 1000;
currentWebsiteViews++;

//Decrement operator (--) decreses a number by 1

// e.g. if a basketball player has 20 points and  point is taken away, they now have 19 points

let basketballPoints = 20;
basketballPoints--;

//! Assignment operator
//Assignment operator(=)

//Definition: The assignment operator assigns a value to a variable.

//case study: you just purchased 10 apples from the grocery store. How can you use Javascript to keep track of how many apples you now have?

let MyTotalApples = 10;

//Assignment operator(+=)

//Definition: The addition assignment operator adds the value on the right to the variable on the left and then assigns the result to the variable on the left.

// case study: As the mayor of small town, the current population of your town is 100. During the year, an additional 50 people moved to your town. How would you calculate the total population now?

let population = 100;
population += 50;

//Assignment operator(-=)
// case study: You have $200 in your wallet. After buying a bok for $30. How can you calculta how much money you now have in your wallet.

let moneyInWallet = 200;
moneyInWallet -= 30;

//Assignment operator(*=)
// case study: you have 12 cookies and decide to break each one into 3 pieces to share with your friends. how would you calculate th total number of cookies pieces you have now?

let cookiesInJar = 12;
cookiesInJar *= 3;

console.log(cookiesInJar);

//Division assigmnent operator (/=)
//case study: you hve a 200 page book that you want to study over the next days, planning to read the same number of pages each day. How would you calculate how many pages you need to read each day?

let MyTotalPages = 200;
MyTotalPages /= 5;

//remainder assignment operator (%=)

//case study: you have 24 concert tickets that you want to distribute equally among 4 friends. How qould you calculate the number of leftover tickets?

let tickets = 25;
tickets %= 4;

//Exponential assignment operator (**=)
// case study: In a math problem, you sre given a base number of 2 and asked to raise this number to the power of 4. How would you calculate this?

let base = 2;
base **= 4;

//!Comparison operators: Used to compare values.
//Equal to (== or ====)
// Definition: The "Equal to" operator checks if the values of two operands are equal or not, regardless of their type.

// Case Study: you have two different measurements of height, one from an input field (string) and the other from a calculated result(number). you need to know if they represent the same height.

let heightA = '150'; //string
let heightB = 150;  //number

const results = heightA == heightB;

console.log(results);

//Not equal to (!=)
//Definition: The "not equal" operator checks if the values of two operands are different, reegardless of their type.

// case study: you want to know if the number of apples you have is different from the number of oranges.

let apples = 5;
let oranges = 7;

const res = apples != oranges;

console.log(res);

//Not equal value or not equal type (!==)

// Definition: The "not equal value or not equal type" operator checks if the values and/or types of two operands are not identical.



// case study: once again, you have two height meaasurement, but you want to know if they are not the same value and/or type.

let resul = heightA !== heightB;
console.log(resul);

//Greater than (>)
// Case study: you have two cars and you want to know if the first car is moving faster than the second car.

let speedA = 60;
let speedB = 50;

let answer = speedA > speedB;

console.log(answer);

//less than (<)
//Greater than or equal to (>=)
//Less than or equal to (=<)

//! Logical operators
//Logical AND (&&)
// Definition: The logical AND operator returns true if both operands are true. otherwise , it returns false.

// Case  study: you want to decide whether to go to the park based on two conditions: if it's sunny and warm outside.

let isSunny = true;
let isWarm = true;

let ShouldGoToPark = isSunny && isWarm;

console.log(ShouldGoToPark);

//Logical OR (||)
//Definition: The logical OR operator returns true if either one or both of the operands are true. It returns false only if both operands are false.

//Case study: you want to check if it's not raining so that you can go outsite.

let isRaining = false;
let isSnowy = true;

let solution = isRaining || isSnowy;

console.log(solution);

//!String operators(+)
//let's consider a case where you want to create a personalized greeting message by combining a fixed greeting string with a variable name string.

let greeting = 'Hello, ';
let firstName = 'Thomas';
let lastName = 'Tweneboah';
let message = greeting + firstName +" " + lastName;

console.log(message);

//+=

let sentence = 'I love';
sentence += ' Javascript';

console.log(sentence);