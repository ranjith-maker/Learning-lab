
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

// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     function inner() {
//         console.log(outerVar); 
//     }
//     return inner;  
// }
// const closure = outer(); 
// closure();

// when you call a function ,for Closure keep this ans function
// name inside a variable, and call with that variable for an
// answer, It give us the access to the variable which is written
// above the return,this return has an function and it'll print
// the variable 


// function out(){
//     let abc = "Alphabetical";
//     function inn (){
//      console.log(abc)
//      }
// return inn
// }

// let control = out();
// control()

// control goes to out, out returns inn, inn is an function and it
// prints abc which is a variable as ans 
// when you call a function ,for Closure keep this ans function
// name inside a variable, and call with that variable for an
// answer, It give us the access to the variable which is written
// above the return,this return has an function and it'll print
// the variable 





// let op1 = 5;
// let op2 =10;

// function num(){
//     return op1 + op2;
// }
// console.log(num())


// function abc(){
//     let a = 10;
// function def(){
//     let b = 20;
// function ghi(){
//     let c = 30;
// }    
// }    
// }
// you can change a in abc all block, b in def, c in ghi 
// b can't be accessed abc or outer , same to a b c as well, they
// can be changed in their territory only


//IIFE

// (function (){
//     console.log("This is IIFE")
// }) (); //---> This is IIFE

// crate a function with no name function (){}, keep all this in
// () bracket and call it by (), it'll pritn whatever is inide the
// function 


// a()

// let a = function(){
//     console.log("hello")
// }

//  Hoisting works in declaration but in expression, it won't,
//  what expression means if you store  it inside a variable, it
//  won't print, it shows, it was it can't access before
//  initialization

// a()

// let a = function(){
//     console.log("hello")
// }


// let ab = (m1, m2) =>{
//     return m1 + m2;}
// console.log(ab(20,30))

// let som= (no1, no2)=>{
//   return no1 + no2;
// }
// console.log(som(50,30)) ---> 80


// function greet(name = "Guest"){
//     console.log("Hello", name)
    
// }

// greet( "Rohith")  --> Hello Rohith


// let total = 0;
// function getscore(...score){
//   score.forEach((val)=>{
//       total = total+ val;
//   })
// return total;
// }
// console.log(getscore(10,20,40,30,50))  --> 150




// let sum = 0;
// for(let i =1; i<101; i++){
//     sum += i;       
// }
// console.log(sum)





// function checkAge(age){
//  if(age<18) return "Too young"
// return "Allowed"
// }

// console.log(checkAge(12))  ---> Too young
// console.log(checkAge(18))  ---> Allowed


// function nos(val){
//     val();
// }
   
// nos(function (){
//     console.log("Hello")
// }) ----> Hello



// function kon(kya){
//     console.log("Hello") 
//     kya();
// }
// function kol(){
//     console.log("Heyy") 
// }

// kon(kol)



// function outer(){
//     let count = 0;
// return function(){
//       count++ 
//       console.log(count)
// }    
// }

// let double = outer();
// double()  --> 1
// double() ---> 2


// function out(){
//     let greet = "Hello All"
// return function(){
//         console.log(greet)
//     }
// }
// let welcome = out();
// welcome() --> Hello All


//Write a BMI Calculator 

function BMI(weight, height){
    return weight / (height * height)
}
console.log(BMI(50,1.5).toFixed(2)) ---> 22.22



function checkAge(age){
 if(age<18) return "Too young"
return "Allowed"
}

console.log(checkAge(12))


