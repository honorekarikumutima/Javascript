//------
// conditional statement
//-----

// if('condition'){
// //code to run
// }

// let age = 18

// if(20 > age){
//     console.log('Yes you qualified to watch the movies');
// }


//1. if your age is more than 18yrs then you are  allowed to watch the movies

//If your age is more than the max Age we will say you are too old please go and rest

//if your age does not meet any of the requirement above then we will say you disqualified

//solution
let minAge = 18;
let maxAge = 30;


let personAttAge = 100;

// if(personAttAge <= minAge){
//     console.log('you are  allowed to watch the movies')
// }else if(personAttAge > maxAge){
//     console.log('you are too old please go and rest')
// }else{
//     console.log('disqualified')
// }


//EXERCISE

//A certain institution is giving out full scholarship to applicants who meet the following requirement

//1. If your total final examination is more than 80%, print a message you qualified for full scholarship otherwise print you got a partial scholarship 

//SOLUTION

// let totalScore = 0.8;

// //message to print
 
// let successMsg = ' you qualified for full scholarship ';

// let failureMsg = 'you got a partial scholarship '
// //student score
// let studentScore = 0.5



// if(studentScore > totalScore){
//     console.log(successMsg);
// }else{
//     console.log(failureMsg);
// }


//-------
//Truthy and falsy values
//----


//falsy

//false
//0
//""
// null
//undefined

//Truthy values

let age = 'yes'

if(age){
   console.log('Yes it is true'); 
}else{
    console.log('Sorry it is false');
}