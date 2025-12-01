
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








// function add(...nums){
//     let sum = 0;
// nums.forEach(function(val){
//   sum = val + sum
// })
//  console.log(sum)   
// }
// add(10,20,30,40,50); ---> 150

// foreach means loop right, it goes to checks, comes, tell you 
// clearly, eg - add(10,20,30,40,50), 10 will go to ...nums,next 
// line, it was about sum, so comes next line, nums go to val that
// goes to val + sum, what is sum, 0, what is val 10  so 0+10 is
// 10, so on every no. 2nd time sum is 10, val is 20, 10+20=30 
// here we consoled sum not add, why because we want sum of all 
// the arguments 



// function add(...nos){
//     let sum = 0;
// nos.forEach((val) => sum = sum + val)  
//     console.log(sum);
// }
// add(1,2,3)  --> 6 with arrow function



// function add(...nos){
//     let sum = 0;
//     // The key change: Use sum = sum + val or sum += val
//     nos.forEach((val) => sum = sum + val) 
    
//     // Remove sum++ so the result is 6 (1+2+3)
//     // sum++ 
    
//     console.log(sum); 
// }
// add(1,2,3) // Outputs 6




// function add(...nums){
//     let sum = 0;
// for(let i = 0; i<nums.length; i++){
//     sum = sum + nums[i];
// }
//     console.log(sum)
// }
// add(1,2,3)  ---> 6 with for loop + function 


// function add(...nums) {
//     let sum = 0;
    
//     // The for loop iterates through the 'nums' array and adds each element to 'sum'
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
    
//     // The sum is now 6 (1 + 2 + 3)
//     console.log(sum); 
// }

// add(1, 2, 3); // Output: 6


// Reduce 
// When do we use this? To make a array a single value


// function add(...nums){
// let ans = nums.reduce(function(acc, val){
//     return acc + val
// },0)  
// console.log(ans)
// }
// add(1,2,52);   ---> 55






// function adit(...nums){
// let sum = nums.reduce((acc,val)=> acc + val, 0); 
//     console.log(sum)
// } 
// adit(10,20,30) --> 60, arrow function + reduce + sum 



// Give a sum of these values = 15,79,56,43,80
// use function + reduce to solve 


// function add(...num){
//     let ans = num.reduce((acc, val)=>acc+val, 0);
//     console.log(ans);
// } 

// add(15,79,56,43,80);


// let arr = [15,79,56,43,80];
// let result = arr.reduce((acc, val) => acc + val, 0);
// console.log(result)  --> 273

// 5- Create an IIFE I run instantly

// (function (){
//     console.log("I run instantly")
// })();   ----> 
// I run instantly


// 6- Make  a nested fucntion where the inner prints the variable
// of outer one - this is called closure 

// function saab(){
// let a = "This is Closure";
// function add (){
//  console.log(a)
// }
//  return add
// }

// let sub = saab();
// sub(); ---> This is Closure



// function parent (){
//     let a = 12;
// function child (){
//     console.log(a)
// }
//   child(); 
// }
// parent();   --->12

// Instead of writing return we can call the child function with 
// it's name 

// Writing style
// 1st step - write 1st func and variable 

// function parent(){
//     let a = 12;
// }  

// 2nd step - write 2nd func and console the variable

// function parent(){
//     let a = 12;
    
//     function child(){
//         console.log(a)
//     }
// }  

// 3rd step - calling both function 

// function parent(){
//     let a = 12;
    
//     function child(){
//         console.log(a)
//     }
//     child();
// }  
// parent();  

// let result = arr.reduce((acc, val) => acc + val,0);
// console.log(result);


// 6- Create an array of 5 fruits add one at the end, remove one
//  from the beginning 
// let fruits = ["banana", "berry", "nuts", "Apple"];
// fruits.push("Mango");
// fruits.shift()
// console.log(fruits) 

// 7- Use a for loop to print all elements of an array.

// let arr = [10,20,30,40,50,60];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }  ---> 10-60 got all elements


//  let arr = [10,20,30,40,50,60];
// for(let i = 1; i<arr.length; i++){
//     console.log(arr[i]);
// } --> 20-60 as you made i = 1, here 1st value is 20, 10is 0th.


// 8- Create an object Person with keys, names, age, city and
// print each key'd value 

//Solving in for in loop
// let person = {
//     name : "Rohith",
//     age : 15,
//     city : "Madhapur"
// }

// for(let ui in person){
//     console.log(person[ui])
// }  --> Rohith, 15, Madhapur  Only values 

// Solving in for in loop
// let person = {
//     name : "Rohith",
//     age : 15,
//     city : "Madhapur"
// }

// for(let ui in person){
//     console.log(ui )
// }  ---> name, age, city  Only keys


// let out = Object.entries(person)
// console.log(out)

// Accesing the values always start with Object.vales(var name)



//9- Use setTimeout() to log "Time up!" after 2 seconds 


// setTimeout (function(){
//     console.log("Times up!")
// },2000)


// writing format is 
// 1st
// setTimeout(function() {}, 2000 )
// 2nd 
setTimeout(function() {
    console.log("Hogaya Sums ")
}, 2000 )



// 1- Write a High Order function runTwice(fun) that takes another
// function and execute it two times.


// function runTwice(fun){
//     fun();
//     fun();
// }

// runTwice(function () {
// console.log("Hello all")    
    
// })  --> 
// Hello all
// Hello all    
// Higher Order Function is something I need to work on a lot.....


// 2- Create a one pure function that always returns the same
// output for the given input, and impure function using a global 
// value.


// Pure Function 
// function  pure(a,b){
//     console.log(a+b)
// }
// pure(1,2) 3
// pure(1,2) 3


// Impure Function 
// let global = 20;
// function impure(a){
//     global++
//     console.log(a + global);
// }
// impure(5); --->   26
// impure(10);  -->  32



// 3- Write a function that uses object destructuring inside the 
// parameter to extract and print name and age

// function person(obj){
//     console.log(obj) --> { name: 'Rohith', age: 20 }
// }
// person({name : "Rohith", age : 20})  

// function person(obj){
//     console.log(obj.name, obj.age)        ---> Rohith 20
// }
// person({name : "Rohith", age : 20})

// function person ({name, age}){
//     console.log(name,age)        ---> Rohith 56
// }
// person({name : "Rohith", age : 56})

// you don't need to write obj.name obj.age all the time. this is 
// what mentioned in the questiin as well object destructuring 
// inside the parameter to extract and print name and age


// 4- Demonstrate a differecne between normal function and arrow
// function  when used as object methods (this issue)
// His explanation is quite confusing and I'll return here 
// watching Rohit's video

// 5- Given an array of numbers use map to create a new array 
// where each number is squared.

// let arr = [10,15,20,25,30,35];
// let result = arr.map((val)=> val * val); 
// console.log(result)  --->  [ 100, 225, 400, 625, 900, 1225 ]


// 6- Use reduce to find the total salary from an arrays of 
// numbers. [1000, 2000, 3000]

// let arr = [1000, 2000, 3000]
// let result = arr.reduce((acc, val) => acc + val , 0)
// console.log(result)  ---> 6000

// let arr = [1000, 2000, 3000]
// let result = arr.reduce( function (acc, val){
//     return acc +  val;
// },0)   
// console.log(result)  //---> 6000

// 7- Use filters to get only even numbers from an array

// let are = [1,2,3,4,5,6,7,8,9,10,8,8,4];

// let result = are.filter((val)=> val%2 === 0);

// console.log(result)
// [
//   2, 4, 6, 8,
//   10, 8, 8, 4
// ]


// 8- Create an arraay of names and use some () and every () to 
// test a condition. eg- all names are longer than 3 characters 

// Some - The some method of array instances returns true if it 
// finds one element in that array that satisfies the provided 
// testing function. Otherwise return false. 

// let names = ["Ganesh", "Ali", "Tara", "India", "US"];
// let result = names.some((val)=> val.length > 3);
//  console.log(result) ---> true

// let names = ["Ganesh", "Ali", "Tara", "India", "US"];
// let result = names.some((val)=> val.length > 10);
//  console.log(result) ---> false


// 9- Create an Object user and test the behaviour of Object seal 
// () and Object freeze by adding/changing keys


// let user = {
//     name : "Rohith",
//     age : 30,
//     city : "Begumpet" 
// }

// console.log(user) --> { name: 'Rohith', age: 30, city: 'Begumpet' }

// let user = {
//     name : "Rohith",
//     age : 30,
//     city : "Begumpet" 
// }

// Object.seal (user)
// user.name = "Rohan"
// user.state = "TN"

// console.log(user) --> { name: 'Rohan', age: 30, city: 'Begumpet' }

// with seal you can update the values with existing keys but
// cannot add new things like this user.state = "TN"

// with freeze we can neither add or update the key- value pair 

// 9- Create a nested Object (user -- address -- city) and access
// the city name inside it. 

// let obj = {
//     user :{
//         name : "Rohith",
//         age : 20,
//   adrress : {        
//         city : "Mumbai"
//     }
// } }

// let arr = obj.user.address;
// console.log(arr(obj.user.address)); 




