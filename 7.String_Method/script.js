//way of creating string

// using string literal
const myName = "John";

//using the constructor function

const firstName = new String("John");

const result = myName === firstName;

console.log(firstName);

//string concatination

//+operator

const str1 = "Hello";
const str2 = "How are you";

const results = str1.concat(" " + str2);

console.log(results);

//JS template literals

//string templates
//back tick sybrax
//template strings

//back tick syntax

const msg = `Good day brother`;
console.log(msg);

//interpolation 

const age = 30;

const welcome = `This is your age ${age}`
console.log(welcome);

//string Length

const lastName = "John";

const resu = lastName.length;
console.log(resu);

//trim/toUpperCase/toLowerCase/indexOf

//trim

const str = 'Coding time     ';
console.log(str.length);

const sln = str.trim();
console.log(sln.length);

//toUpperCase/toLowerCase

console.log(str.toUpperCase());

//indexOf()

const res = str.indexOf("o")
console.log(res);