//ways of creating a function

//1. function declaration 
//2. function expression

//create function to say hello
//1. function declaration
function sayHello(){
    console.log('Hello, welcome to function')
}

//calling a function / invocation

sayHello()

//2. function expression

let greeting = function(){
    console.log("Good Morning")
}
greeting()

 //Examples

const addNum = function(){
    let x = 10;
    let y = 18;
    let results = x + y;
    console.log(results)
}

addNum()

//parameters and arguments

const addNumber = function(x, y){
    let result = x + y;
    console.log(result)
}

addNumber(2,3)

//EXERCISE

//1. create a function that will multiply 3 numbers and display the answer in the console

const multiNum = function(x, y, z){
    let solution = x * y * z
    console.log(solution)
}

multiNum(2, 3, 4)