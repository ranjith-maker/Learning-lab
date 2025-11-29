
// Learing Loop
// let i = 1;
// while( i<6)
// {
// console.log(i)
// i++
// }
//While Loop ---> start while(end) code change 
// let i = 1;
// while(i < 33) 
// {
//  console.log(i) 
// i++
// }

// start
// do{
//     code
//     change
// }
// end


// let i = 12;
// do{
//     console.log(i)
//     i++
// }
// while(i<20)

// let i = 12;
// while (i < 20)
// {
// console.log(i)
// i++
// }

//Break in Loop

// for(let i =1; i<50; i++ ){
//     console.log(i);
//     if (i === 32){
//         break; 
//     }
// }
//It breaks at 32

//Continue in Loop
// for (let i = 0;   i<20; i++){
//   if(i ===15) {
//       continue;}  
//     console.log(i)
// }



// for(i=1; i<=20; i++){
// if(i===15){
//     continue; 
// }
// console.log(i)
// }

//Print numbers 1-10 from using for loop
// for(i=1; i<=10; i++){
//     console.log(i)
// }

// Print numbers 10-1 from using a while loop
// let i=10;
// while(i>0)
// {
// console.log(i)    
// i--
// }

//3- Print even numbers from 1 to 20 using for loop
// for(let i = 1; i<=50; i+=2){
//     console.log(i)
// }

// 4- Print odd numbers from 1 to 15 using from whileloop

// let i = 1;
// while( i<16){
//     console.log(i)
//     i+=2
//}

// for(let i= 0; i<20; i+=2){
//     console.log(i) 
// }

// for(let i = 1; i<21; i++){
// if( i%2 === 0){
// console.log(i)
// }
// }




// for(let i = 1; i<20; i++ ){
//     if(i%2 === 1){
//         console.log(i)
//     }
// }



// for(let i = 0; i<10; i+=2){
//     console.log(i)
// }

// for(let i = 1; i<11; i++){
// console.log( `5 * ${i} = ${i}`)
// }



// let sum =0;
// for(let i = 1; i<101; i++){
//     sum += i
// }
// console.log(sum)



// sum = 0;
// let i = 1;
// while(i<101){
//     sum+=i
//      i++
// }
// console.log(sum)    


// let obj = {
//     name :"Tara",
//     age :40,
//     city :"Tokyo"
// };

// for(let key of Object.)


// let arr = [10,20,30,40,50];
// arr.forEach(num=>console.log(num))


// let arr = [10,20,30,40,50];
// arr.forEach((a, ab)=>{
// console.log(a, ab  )

// })

// For each Loop and 

// let arr = [10,20,30,40,50];
// arr.forEach(a => {
//     console.log(a)
// })

// arr.forEach((a,ab,c)=>{
// c[ab]= a*2;

// })

// console.log(a,ab,c)



// function add( a1 = 4, a2 = 5){
//     console.log(a1 + a2)
// }
// add(6,8)  ---> 14
//  and if we call the function by it's name and add value there,
//  that new value will be considered, just lime CSS cascading, 
//  last value 

// function add( a1 = 4, a2 = 5){
//     return a1 + a2;
// }
// add(6,8);  ---> 14
// we can also write return 


// function add( a1 = 2, a2 = 5){
//     console.log(a1 + a2)
// }
// add()  ---> 7

// we can also pass vaules in parenthesis itself, and if we call
// the value and just leave it without passing any arguments 
// to the parenthesis, it'll add parenthesis values


// let com = function(a,b,...num){
//     console.log(a,b,...num  )
// }
// com(12,13,54,68,39,73,687,7129) ---> 12 13 54 68 39 73 687 7129


// let opj = {
//     name : "Rohan",
//     age : 20,
//     city : "Mumbai",
//     balance : 45000
// }

// // for (let key in opj){
// //     console.log(key,opj[key])
// // }

// let opj3 = Object.create(opj);
// opj3.name = "Rakesh";
// opj3.state = "Maharashtra";

// // console.log(opj3)
// for(let kay in opj3 ){
//   console.log(kay,opj3[kay]  )
    
// } 


// function names(dan){
//     console.log("Hello all")
//     dan();
// }

// function greet(){
// console.log( "Hey people" )
// }

// names(greet)

//Second type of function

// function names(san){
//   console.log("Hello")
//   san();
// }

// names(function(good){
//   console.log("Heyyyyyyyyyyy")
// })




//For Each Loop 

// let are = [10,20,30,40,50];

// are.forEach(function(key){
//     console.log(key)
// })


// let are = [10,20,30,40,50];
// are.forEach((nos,ind,are)=>{
    
//     are[ind] = nos  * 2
// })
// console.log(are)


// Filter even no.s
// let arr = [10,20,45,79,46,13,49,66,78]

// let result = arr.filter((arr)=>{
//     return arr%2 === 0
// })
// console.log(result)



// let arr = [10,20,45,79,46,13,49,66,78]
// let result = arr.filter(function(x){
//     return x%2 === 0
// });
// console.log(result)

// function names(san){
//   console.log("Hello")
//   san();
// }
// names(function(good){
//   console.log("Heyyyyy")
// })







// let arr = [10,20,45,79,46,13,49,66,78]
// let result = arr.filter((nos) => nos%2 ===1  
// )
// console.log(result)





// Same done with for loop
// let arr = [10, 29, 31, 47, 50];
// let result = [];
// for(let i =1; i<arr.length; i++ ){
//     if(arr[i]%2  === 1)
//     result.push(arr[i])
// }
// console.log(result) [ 29, 31, 47 ]


// let arr = [10, 29, 31, 47, 50];

// let sum = [];
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]%2 === 1)
//     sum.push(arr[i])
// }

// console.log(sum)
//  const students = [

// {name : "Rohan", age : 22, marks : 70 },
// {name : "Mohan", age : 24, marks : 80 },
// {name : "Darshan", age : 28, marks : 30 },
// {name : "Mohit", age : 32, marks : 40 },
// {name : "Shadik", age : 12, marks : 90 },
// ]


// let result = students.filter((val)=> val.marks>50);
// console.log(result)


// let result = students.filter(({marks})=> marks>50);
// console.log(result)

// let arr = [10,20,30,40,50];
// let result = arr.map((val)=>{
//       return val*val
// });
// console.log(result) ---> [ 100, 400, 900, 1600, 2500 ]

// Just as filter, after arr.map((val))--> this val takes all the
// values of arr and arrowed to return val themselves into  *
// values 

// let arr = [10,20,30,40,50];
// let result = arr.map((val)=>val * val);
// console.log(result)



// let arr =[1,2,3,4,5,6];
// let result = arr.filter((val)=> val%2 === 0).map((num)=> num
// *num).map((nom)=> nom/2);
// console.log(result)

// Here we've both the filer and map 
// Filter - here we've filtered the even no.
// Map - we have squared the filtered value as the ans it printed
// the final ans as squared one




// function callsback(callbackFunc) {
//     callbackFunc()
// }

// function firstClass() {
//     console.log("I was called");
// }

// firstClass(); // "I was called"
// callsback(firstClass); // "I was called"



// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);


// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);


// Higher Order Function
// function abc(val){
    
// }
// abc(function {
    
// })

// Now the above fucntion has become a HOF, abc is called passed
// the argument to the abc's parameter as another function,
// now val has become another function, SO abc has become a HOF
// ex - one who takes another work go higher, abc took a complete
// function gave it to their own work so it is HOF 

// function abc(val){
//     return function (){
//  console.log("Hello")       
//     }
// }
// abc()()  -->Hello


// let a = 12;
// function hal(){
//     console.log("Hello")
// }
// hal()
// this has done no changes to the outer a value so it is Pure
// function

// let a = 12;
// function hol(){
//     a++
// console.log(a)
    
// }
// hol()
// This is a impure function where it changes the outer values,
// if you call hol() it shows 13




// let are = ["apple", "mango", "fig", "munch" ];
// let [a, ,b] = are;
// console.log(a,b)  --> apple fig


// Add mango at the end, Pineapple at the beginning of this array

// let fruits = ["apple", "banana"];
// fruits.push("mango"), fruits.unshift("Pineapple")
// console.log(fruits) --> [ 'Pineapple', 'apple', 'banana',
// 'mango' ]



// let arr = [1,2,3];
// let result = arr.reduce((ac, val) => ac + val)
// console.log(result)




// let arr = [11,55,46,79,10,96,37];
// let so = arr.sort(function(a,b) {
//     return a-b;
// });
//  console.log(arr) --->Ascending Order


// Replace banana with kivi
// let fruits = ["apple", "banana"];
// fruits.pop(), fruits.push("kiwi")
// console.log(fruits)


//Remove the last  in the array using method
// let are = [1,2,3,4,5]
// are.pop()
// console.log(are)  --> [ 1, 2, 3, 4 ]


// let fruits = ["apple", "banana"];
// fruits.pop(), fruits.push("kiwi")
// console.log(fruits)

// Insert Red and Blue at the index1 in the array
// let colors = ["pink", "green", "yellow", "black", "white"];
//  colors.splice(1,0,"red","blue" );
// console.log(colors);


// Extract only the middle 3 elements from this array

// let num = [1,2,3,4,5,6,7];
// let nom = num.slice(2,5) 
// console.log(nom) ---> [ 3, 4, 5 ]

// console.log(num.slice(2,5)) --> [ 3, 4, 5 ]


// 11- Use .find() to get the first number less than 10

// let num = [5,11,78,10,9,65,2];
// let result = num.find((val)=>val>10 )
// console.log(result)  --> 11




//12- Destructutre to get the first name and the last name

// let num = ["Harsh", "Sharma"];
// let [a,b] = num
// console.log(a)  Harsh 
// console.log(b)  Sharma 





// 13- Merge two Arrays using spread operator

// let a = [10,20,30];
// let b = [50,79,65];

// let c = [...a, ...b]
// console.log(c) ---> [ 10, 20, 30, 50, 79, 65 ]


//14- Add India to the start of this array using Spread
// let countries = ["UK","Ireland","USA"];
// countries = [...countries, "Italy" ];
// console.log(countries) -->[ 'UK', 'Ireland', 'USA', 'Italy' ]

// 15- Clone this Array properly (not by reference)
// let arr1 = [10,20,30,40];
// let arr2 = [...arr1];
// console.log(arr2)


// Clone by Reference

// let arr1 = [10, 20, 30];
// let arr2 = arr1;   // cloned by reference

// arr2.push(40);

// console.log(arr1); // [10, 20, 30, 40]
// console.log(arr2); // [10, 20, 30, 40]




// Clone using .slice()
// let arr1 = [10, 20, 30];
// let arr2 = arr1.slice();   // clone by value

// arr2.push(40);

// console.log("arr1:", arr1);   // [10, 20, 30]
// console.log("arr2:", arr2);   // [10, 20, 30, 40]



// Clone using Array.from -

// let arr1 = [10, 20, 30];
// let arr2 = Array.from(arr1);   // clone by value

// arr2.push(50);

// console.log("arr1:", arr1);   // [10, 20, 30]
// console.log("arr2:", arr2);   // [10, 20, 30, 50]


// Generate all rotations of an array


// let arr = [1,2,3,4,5,6];
// let store = [];

// for (let i = 0; i < arr.length; i++) {
//   store.push(Array.from(arr));  // store current rotation
//   arr.push(arr.shift());        // rotate array
// }

// console.log(store);

// Answer
// [
//   [1, 2, 3, 4, 5, 6],
//   [2, 3, 4, 5, 6, 1],
//   [3, 4, 5, 6, 1, 2],
//   [4, 5, 6, 1, 2, 3],
//   [5, 6, 1, 2, 3, 4],
//   [6, 1, 2, 3, 4, 5]
// ]


//create 2 arrays, keep 2nd array in the first array

// let arr1 = [10,11,97];
// let arr2 =[ 30,34,56];
// arr1.push(arr2)
// console.log(arr1)


//Objects

//To access the objects
// let  role = "admin";
// let obj ={
//     name : "Harsh",
//     age : 30,
//     city : "Bhopal",
//     [role] : "Jagan"
// };
// Object.entries(obj).forEach(function (val){
//   console.log(val)  
// })  
// console.log(obj) // --> { name: 'Harsh', age: 30, city: 'Bhopal', admin: 'Jagan' }


// let obj ={
//     false : "Harsh",
//     10: 30,
// };
// console.log(obj)  -->{ '10': 30, false: 'Harsh' }

// const obj ={
//     first_name : "Harsh"
// }
// obj2 = obj.first_name = "Karthick";

// obj["first_name"] = "Mohan"
// console.log(obj)



// obj2 = Object.assign({},obj)

// let obj ={
//     name : "Harsh",
//     age : 30,
//     city : "Bhopal"
// };

// obj2 = Object.assign({Address : "Nagar"},obj)
// {Address: 'Nagar', name: 'Harsh', age: 30, city: 'Bhopal'}








// Sort this array alphabetically and then reverse it

// let names = ["Zain", "Balm", "Farz", "Karzz", "Alex" ]
// names.sort(),names.reverse()
// console.log(names) --> [ 'Zain', 'Karzz', 'Farz', 'Balm',
// 'Alex' ]
 

// Use map to square each number
// let are = [10,20,3,4,50];
// let result = are.map((val)=> val * val)
// console.log(result) -->[ 100, 400, 9, 16, 2500 ]



// Use filter to keep no.s greater than 10
//  let are = [10,20,3,4,50,11];
// let result = are.filter((val)=> val>10)
// console.log(result) ---> [ 20, 50, 11 ]

//GPT ans without Boolean as true or false

// let password = "Hoga";
// let attempts = 0;
// const maxAttempts = 3;

// while (attempts < maxAttempts) {
//   const userInput = prompt("Enter password:");

//   if (userInput === password) {
//     console.log("Access granted!");
//     break;
//   }

//   attempts++;
//   console.log(`Wrong password. Attempts left: ${maxAttempts - attempts}`);
// }

// if (attempts === maxAttempts) {
//   console.log("Account locked due to too many failed attempts.");
// }


// //Using Function 

// function checkPassword(correctPass, maxAttempts) {
//       let attempts = 0;

//   while (attempts < maxAttempts) {
//     let entered = prompt("Enter password:");

//     if (entered === correctPass) {
//       console.log("Access granted!");
//       return;  // stop function
//     }

//     attempts++;
//     console.log(`Wrong. Attempts left: ${maxAttempts - attempts}`);
//   }

//   console.log("Account locked.");
// }

// checkPassword("Hoga", 3);


// let age = prompt("What is your age")

// if (age === null){
//     console.error(" You've cancelled it");
// } else {
//     if( age.trim() === "") {
//         console.error(" Please write something..." )
//     } else {
//    age = Number(age);
//   if (isNaN(age)) {
//     console.error("Please enter a number...")
//   }
//  else {
//     console.log(`your age is ${age}`)
// }
// }
// }

// 1st condition 
// if (age === null){
//     console.error(" You've cancelled it");

// if the user pressed Cancel, it is null, we coded, age === null, print this

// 2nd
// else {
//     if( age.trim() === "") {
//         console.error(" Please write something..." )

// if the user left only or wothout writing anything pressed OK, we can show this 
// .trim() reduces useless spaces from first letter of the password to last letter eg-(    Rohith         ) 
// or (          22    )

// 3reduces   age = Number(age);
//   if (isNaN(age)) {
//     console.error("Please enter a number...")

// when a user enters age in letters like twentytwo then it is NaN, so we coded this

// 4th last case, he must have entered a Number, s console this 


// let password = "Hoho";
// let attempt = 0;
// let maxAttempt = 3;

// while( attempt < maxAttempt  ){
//     let pass = prompt( "Word ???")
// } if(pass === password){
//     console.log("OK")
//     break
// }
//      attempt++
//      console.log(" wrong password")
// if(  attempt === maxAttempt ){
//     console.log("Acc Locked")
// }



// let word = prompt("What's your word?");
// let count = 1;                   // we already asked once

// while (word !== "Finish" && word !== null) {
//   word = prompt("Try again:");
//   count++;
// }

// if (word === "Finish") {
//   console.log("You typed it right this time!");
//   console.log("Total attempts:", count);
// } else {
//   console.log("You cancelled or closed the prompt. Attempts:", count);
// }



// let word;
// let count = 0;

// while(word !== "Finish"){
//  word = prompt("whats your ?") 
//      console.log("Try again")
//     count++;
//     if(word === "Finish"){
// console.log("You typed right this time")
// }
// }
//     console.log(count)




// let word;
// let count = 0;

// while (word !== "Finish") {
//   word = prompt("whats your ?");
//   count++;

//   if (word === "Finish") {
//     console.log("You typed right this time");
//   } else {
//     console.log("Try again");
//   }
// }

// console.log(count);


// let tol;

// while ( tol !== tol%2 === 0 ) {
//  tol = prompt("Type even no.")  
//  tol++ 

//  if(tol === tol%2 ===0){
//     console.log("We are Even bro!!")

// } else {
//     console.log("try again")

// }}




// let tol;

// while (true) {
//   tol = Number(prompt("Type even number:"));

//   if (tol % 2 === 0) {
//     console.log("We are even bro!!");
//     break;  // stop loop
//   } else {
//     console.log("Try again");
//   }
// }



// let num;
// while(true){
//     num = Number(prompt("Give me even no. bro?.."))
//    if(num % 2 === 0){
//     console.log("We're even bro")
//     break;   
// }
// else{
//     console.log("Try again")
// }
// }
// Ans - 
// Give me even no. bro?..12
// We're even bro
 

// let num; - we're gonna enter something in num so left with ;
// while(true)  - this is wheta happen in our case, we dontt know when to stop But we know when it met with the even no, the if condition
// You use while(true) when:
// You don’t know how many times the loop should run,
// BUT
// You know the rule for when to stop.
//  num = Number(prompt("Give me even no. bro?.."))   --> now we're defining what it should the prompt be, what will the suer see  
// since we know when to stop, we should not try to hurry and write the if condition, after defining the prompt  
//  if(num % 2 === 0){
//     console.log("We're even bro")
//     break;   ---> if(condition) if the statement is true then print this if it is correct then break, or else even if the user enetrs correct InputDeviceInfo, it'll keep looping.
//  and we can use else element , there should ne no condition with else, if you want any new condition use else if or end with else.   



// let tol;

// while (true) {
//   tol = prompt("Type even no.");
  
//   if (tol % 2 === 0) {
//     console.log("We are Even bro!!");
//     break;  // Stop when even number entered
//   } else {
//     console.log("try again");
//   }
// }


// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i);   // Step 1: show the odd number
//     count++;          // Step 2: count it
//   }
//   if (count === 3) break;
// }



// let count = 0;
// for(let i = 1; i<21; i++){
//     if(i%2 === 1){
//         count++
//         console.log(i)
//     }
// if(i === 5){
//     break;
// }}     



// Print numbers divisible by 7, from 1 to 50 . Use % and Loop

// for(let i = 1; i<51; i++){
//     if(i%7 === 0)
// console.log(i)
// }






// let balance = 1000, count = 0;

// while(balance >= 0 && count++ < 3){
//   let atm = +prompt("How much you want?");
//   if(atm > balance) {
//     console.log("Insufficient balance");
//     break;
//   }
//   balance -= atm;
// }

// console.log(`Balance is ${balance}`);




function atmMachine() {
  let balance = 1000;
  let attempts = 0;

  while (attempts < 3) {
    let amount = +prompt("Enter amount:");
    attempts++;

    if (amount > balance) {
      console.log("Insufficient balance");
      break;
    }

    balance -= amount;
    console.log("Withdrawal successful:", amount);
  }

  console.log("Balance left:", balance);
}

atmMachine();



function atm(){

let balance = 1000;
let attempt = 0;

while( attempt < 3){

let ask = +prompt("How much you want ?")
attempt++;

if(ask > balance ){
  console.log("Insufficient balance")
  break;
}
 balance-= ask;
 console.log("Successful withdrawal", ask  )
}
console.log("Balance left", balance)
}
atm()


