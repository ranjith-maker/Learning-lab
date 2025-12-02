
// Learning Loop
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


// Real life scenerio question . let's say your you got all these fruits names in the backend 
// how do you know how many times a particular fruit name has come 
// final result will look like an object it means 
// result = {
//     orange : 3
// }
 
// let fruits  = ["Orange", "Apple", "Pine","Apple","Orange"
// ,"Mango", "Pine", "Banana", "Banana", "Orange", "Apple" ];

// let result = fruits.reduce((acc, val) => {
//        if(acc.hasOwnProperty(val))
//         acc[val]++;
//       else 
//         acc[val] = 1;
//      return acc;   
// },{})

// console.log(result)
// { Orange: 3, Apple: 3, Pine: 2, Mango: 1, Banana: 2 }

// for acc we write one 0 right that is initializer, here instead of that 0  we keep the curly bracesopned
// 1st Step 
// let result = fruits.reduce((acc, val) => {
       
// },{})

// val gets all the fruits value, acc has none 
//  if(acc.hasOwnProperty(val)) - Checks if this fruit name already exists in the box
// First time you see “Orange”? NO key exists
// Second time you see “Orange”? Key exists if yes then add 
//  acc[val]++;  if not acc[val] =1 -  If fruit does NOT exist → add it with count 1



// Same with Groups 
// let fruits = ["Orange", "Apple", "Pine", "Apple", "Orange",
// "Mango", "Pine", "Banana", "Banana", "Orange", "Apple" ];

// let groups = Object.groupBy(fruits, fruit => fruit);

// let result = {};
// for (let key in groups) {
//   result[key] = groups[key].length;
// }

// console.log(result);

// { Orange: 3, Apple: 3, Pine: 2, Mango: 1, Banana: 2 }



// let obj ={
//     name : "Rohith",
//     age : 20
// }
// console.log(obj.hasOwnProperty("name")) - true 
// how to know  whether obj has a key called name ?
// if the key is present then it'll show in true or false way 
// console.log(obj.hasOwnProperty("name")) 
// inside obj, name, age are properties right ? we are checking  whether obj has it or not 

// let fruits = ["Orange", "Apple", "Pine", "Apple", "Orange",
// "Mango", "Pine", "Banana", "Banana", "Orange", "Apple" ];

// let result = fruits.reduce((acc,val) =>{
//     acc.hasOwnPropert(val) ? acc[val]++ : acc[val] = 1;
//     return acc;
// },{} )

// console.log(result);


// let fruits = ["Orange", "Apple", "Pine", "Apple", "Orange",
// "Mango", "Pine", "Banana", "Banana", "Orange", "Apple" ];

// let result = {};

// for (let key of fruits) {
//   if (result[key]) {
//     result[key]++;
//   } else {
//     result[key] = 1;
//   }
// }

// console.log(result);


// In an array we can write duplicate values like this 
// let arr = [10,20,30,10,10,40,40,30,]
// set stores only unique values, how to make set

// let sat = new Set(); ---> to initialize it open [],put the values inside 

// let sat = new Set();
// sat.add("Rohit")
// sat.add(30)
// sat.add("30")
// sat.add(22)

// sat.delete(22)

// console.log(sat)


// Instagram IDs 

// const user_id = new Set(["rohit_negi9", "Mohith_91", "Virat_009", "Kohli_97"])
// let new_user =  "rohit_negi9"
// //To check we can use the same username or not, 
// console.log(user_id.has(new_user))

// How to convert this array into Set
// let arr = [10,20,30,10,10,40,40,30];
// let sat = new Set(arr);
// console.log(sat);  ---> Set(4) { 10, 20, 30, 40 }

// Union of Set

// let set1 = new Set([10,20,30,10,10,40,40,30,]);
// let set2 = new Set([122,76,10,656,50]);
// let set3 = new Set([...set1, ...set2]);
// console.log(set3);  ---> Set(8) { 10, 20, 30, 40, 122, 76, 656, 50 }

// Now to check whether set2 has similar values as set1 like insta ID 
// we can use Filter, we can filter only array right ? we know how to convert into array by using spread operator [...arr]



let set1 = new Set([10,20,30,10,50,40,40,30,]);
let set2 = new Set([122,76,10,40,50,50]);
// convert a set1 into array and filter it
// let result = [...set1].filter((val) => set2.has(val))
// console.log(result)  --> [ 10, 50, 40 ]

// here, set1 value goes to val and checks set2 has any set1
// values and printing with result as similar values in both 


// Iterate over set - For of and ForEach loop

// let set1 = new Set([10,20,30,10,50,40,40,30,]);
// let set2 = new Set([122,76,10,40,50,50]);

// for(let key of set1){
//     console.log(key)
// } --> 10 20 30 50 40 

// let result = set2.forEach((val)=> console.log(val))
// 122 76 10 40 50 

// It stores in key-value pair - "KEY" should be unique 

// let map1 = new Map();
// map1.set(3,90 )
// map1.set("Rohith", 23)
// map1.set("Power", 20)
// console.log(map1)  --> Map(3) { 3 => 90, 'Rohith' => 23, 'Power' => 20 }

//  let map1 = new Map(); map1.set() - this is how we add properties for Map 



// let map1 = new Map();
// map1.set(3,90 )
// map1.set("Rohith", 23)
// map1.set("Power", 20)
// map1.set("Rohith", 40)

// console.log(map1) Map(3) { 3 => 90, 'Rohith' => 40, 'Power' => 20 }
// if we use same key again, it wil just update it 


// let map1 = new Map([[4,"Odin project"], ["Movie","Life of Pi"], ["Doubt","Chatgpt"]]);

// for(let [key,value] of map1){
//     console.log(key,value)
// }
// ans - 
// 4 Odin project
// Movie Life of Pi
// Doubt Chatgpt


// THIS KEYWORD

// Everything in JS revolves around Object

// Global Object 
// how JS know that when we type console.log() and prints whatever is inside how Math.random()knows it ot generate a Node. 
// The global object name is Window, means we can write window.Math.random() like accessing MAth with window 
// Chrome = window , Node = global
// what is globalthis - It pounts the global object



// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.

// // 2:Inside a Function 
// // i: (Non-Strict Mode)
// // When this is used inside a regular function, it refers to the global object.

// function greet(){
//     console.log(this);
// }

// greet();  and go to console in browser the window will show 

// when write "use strict"
// it won't run as per new version, for ex- 

// a = 10;
// console.log(a) --> it gives 10 as an answer


// "use strict"
// a = 10;
// console.log(a) --> it'll give error as to define the a first


// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// let obj ={
//     name : "Rohith",
//     age : 25,
//    greet : function (){
//         console.log(this);
//     }
// }
// obj.greet();  --> { name: 'Rohith', age: 25, greet: [Function: greet] }


// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }

// obj.greet();




// let obj = {
//     name : "Rohit",
//     city :"Tokyo",
//     age :20,
//   greet : function (){
//       let ab = ()=>{
//           console.log(this )
// }
//       ab();
//   }}

// obj.greet();  --> { name: 'Rohit', city: 'Tokyo', age: 20, greet: [Function: greet] }


// when we use this keyword in arrow function, it takes a lexical scope here that is obj right ?

// You are absolutely correct that the issue lies with how the this keyword works inside arrow functions
//  and that it uses lexical scope. However, the object whose scope is captured is not obj itself, 
//  but the scope surrounding the greet function.



// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);
// console.log(a); --->  Person { name: 'Rohit', age: 20 }



// Explain THIS keyword for arrow fun and normal fun without using Object 


// let greet = ()=>{
//     console.log(this)
// }
// THIS with Arrow function inherit the global scope, so this will point out Window 

// let meet = function(){
//     console.log(this);
// }

// meet();  this will also point out Window only as it is GLobal 


// var meet = function () {
//     console.log(this)
// }

// window.meet();
// VM829:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// Because let and const isn't a global where as Var is global .




