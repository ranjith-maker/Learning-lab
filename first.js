
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


// function abc(val){
//     return 12 + val;
// }
// let value =abc(10);   
// console.log(value) ---> 22

// function abc(){  
//     return 12;
// }
// let value = abc();
// console.log(value)  ---> 12

// FOR OF LOOP
// let arr = [ 10,20,30,40,50,60 ];
// for(let key of arr){
// console.log(key)    
// }   -->102030405060 it prints all the array

// let str = "Rohit is a good boy"
// for( let key of str){
// console.log(key)    
// } ---> it prints the string in single single letter one one 

// if you have to iterate over Object you can turn into an array 
// first, whuc  we easily do by accessign Object's value or keys 

// let obj = {
//     name :"Tara",
//     age :40,
//     city :"Tokyo"
// };

// for(let key of Object.keys(obj)){
//     console.log(key, obj[key])
// }
// for(let key of Object.keys(obj) ){
//     console.log(key)// --> name,age,city
// }
// for(let key of Object.values(obj)){
//     console.log(key) //---> Tanya, 40, Tokyo
// }

// let fruits = ["Apple", "Banana", "Mango"];
//  for(let key of fruits){
//     console.log(key) 
// }


//Call Back Function

//you make one function that fetches the backedn data

// function fetchData(){
//     console.log("I am fetching data")
// }
// setInterval(fetchData,


// Let's your website has to call API and update information every
// 5s. you can call setInterval () it takes 2 values, what value
// and how oftern it needs to change, 5000,write in millisecond 

// In For each we use the second type of callback,that, calling a
// function inside writing another whole whole function

// let arr = [10,20,30,40,50  ];
// arr.forEach(function(num) {
//     console.log(num)
// }) ---> 10...50



// let arr =[ 10,20,30,40,50  ]
// arr.forEach( (num)=> console.log(num))  // --> 10...50

// let arr = [10,20,30,40,50];
// arr.forEach(num=>console.log(num))

// let arr = [10,20,30,40,50]
// arr.forEach


// arr.forEach(num=>console.log(num))


// we can pass 3 arguments in forEach loop
// first -number-> which is Array's value
// second -index --> which gives index no. also
// third - manipulation
// we saw the first, let see the second 

// let arr = [10,20,30,40,50];
// arr.forEach((a, ab,arr)=>{
//  arr[ab] = a*2

// })

// console.log(arr)  ---> [ 20, 40, 60, 80, 100 ]

// It starts with variable name.forEach here arr.forEach
// Inside foreach loop there are 3 elements we can store,first 2 
// is anything last is array's variable
// first value represents --> a - basic array's value 10 20..50
// second value represents --> ab - it gives of each index with
// array as it comes after first value so even in ans --> value
// index 10 0  
// third value repersents ---> arr your arrya's variable, if you
// want to manipulate it you can do it, like multiply, add, sub if
// you need to multiply with 2, do this in the next line, next
// line is, it needs to comes as a reverse ex, 
// arr[ab] = a * 2
// 3rd[2nd] = 1st changes 

// after closing the bracket, console need to come outside the
// bracket to print it all 3, first two anything and arrays's
// variable 

// Printing Array's values
// let arr = [10,20,30,40,50];
// arr.forEach(a => {
//     console.log(a)
//   })   ---> 10 20 30 40 50


// Printing Array's values and index 
// let arr = [10,20,30,40,50];
//  arr.forEach((a,ab)=>{
//      console.log(a,ab)
//  } )  ---> 10 0 20 1
 
//  Array with manipulation 
// let arr = [10,20,30,40,50];
// arr.forEach((a,ab,arr)=>{
// arr[ab] = a*2;
// })
// console.log(arr) --> [ 20, 40, 60, 80, 100 ]



// let ary = [10,20,30,40,50];
// // Use forEach to get the value 
// // here we can use call back

// let are = function(num){
//     console.log(num)
// }
// ary.forEach(are) ---> 10 20 30 40 50 

// Mostly we get cases like 1st one, taking array values with the
// help of forEach


//JS - Filter

// let arr = [10,20,31,47,50];
// let result = arr.filter((no) => no%2 === 0);
// console.log(result)
//like callback function we don't need {} and return 


// let are = [21,11,65,40,13,11];

// let result = are.filter((nos)=>{
//     return nos%2 === 1;
// })
// console.log(result) ---> [ 21, 11, 65, 13, 11 ]



// let result = ary.filter((val) => val%2 === 1);
// console.log(result) ---> [ 29, 31, 47 ]
 
// let ary = [10,29,31,47,50];
// let result = ary.filter((vel)=> vel%2 === 1);
// console.log(result)



// let arr = [10, 29, 31, 47, 50];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);





// let arr = [10, 29, 31, 47, 50];

// let result = [];
// for(let i =1; i<arr.length; i++ ){
//     if(arr[i]%2  === 1)
//     result.push(arr[i])
    
// }
// console.log(result)

// Filter
// let arr = [10, 29, 32, 47, 50];
// let result = arr.filter((val) => val%2 ===0);
// console.log(result)


// Students Grade 
const students = [

{name : "Rohan", age : 22, marks : 70 },
{name : "Mohan", age : 24, marks : 80 },
{name : "Darshan", age : 28, marks : 30 },
{name : "Mohit", age : 32, marks : 40 },
{name : "Shadik", age : 12, marks : 90 },
]

const result = students.filter((val)=> val.marks>50);
console.log(result)
ans - 
[
  { name: 'Rohan', age: 22, marks: 70 },
  { name: 'Mohan', age: 24, marks: 80 },
  { name: 'Shadik', age: 12, marks: 90 }
]

