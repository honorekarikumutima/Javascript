//------------------
// conditional statement
//-----------------
/*if('condition'){
    //code to run
}*/

let age = 18

if(20 > age){
    console.log('Yes you qualified to watch the movies');
}


//1. if your age is more than 18years then you are allowed to watch the movies

//2. if your age is more than the max Age we will say you are too old please go home and rest

//3. if your age does not meet any of the requirement above then we will say you disqualified

//solution 

let minAge = 18;
let maxAge = 30;
let personAttAge = 10;

if(personAttAge > minAge){
    console.log('you are allowed to watch the movies');
}else if(personAttAge > maxAge){
    console.log('you are too old please go home and rest');
}else{
    console.log('you disqualified');
}

//EXERCISE

//A certain institution is giving out full scholarship to applicants who meet the following requirement

//1. if your total final examination is more than 80%, print a message you qualified for full scholarship otherwise print you got a partial scholarship

//SOLUTION

let totalScore = 0.8;

//message to print

let successMsg = "you qualified for full scholarship";
let failureMsg = "you got a partial scholarship";

//Student Score
let studentScore = 0.75;

if(studentScore > totalScore){
    console.log(successMsg);
}else{
    console.log(failureMsg);
}