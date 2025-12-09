                                     //FUNCTION Revision

// 10 Easy, 10 Medium, 10 Hard — based ONLY on the topics  learned.
// ________________________________________
// ✅ EASY (10 Questions)
// Basic understanding of functions, parameters, return, arrow functions.
// 1. Write a function square(num) that returns the square of a number.
// 👉 Use normal function syntax.
// 2. Convert the above function into an arrow function.
// **3. Write a function that takes a name and prints:
// "Hello, "**
// (Default parameter should be "Guest")
// 4. Create a function add(a, b) that returns the sum and store the result inside a variable called result. Print result.
// 5. What is the output?
// function test(a = 10, b = 5) {
//   return a - b;
// }
// console.log(test());
// console.log(test(20));
// 6. Write a function expression (store function in a variable) called sayHi that prints "Hi!". Call it.
// 7. Write an arrow function that cubes a number (x³). No curly braces, no return keyword.
// 8. Write a function that receives an object and prints its name and age.
// 9. Destructure the object inside function parameters and print only city and country.
// 10. Create a function runTwice(fn) that calls a function two times. Test by passing a function printing "Hey!".
// ________________________________________



// 1. Write a function square(num) that returns the square of a number. 👉 Use normal function syntax.
// function ok(num){
//     return num * num;
// }
// console.log(ok(4)) ---> 16

// 2. Convert the above function into an arrow function.
// let arrow = (num) => num * num;
// console.log(arrow(4)) ---> 16

// 3. Write a function that takes a name and prints:
// "Hello, "** (Default parameter should be "Guest")

// function greet(guest){
//     console.log("Hello," , guest  )
// }
// greet("Rohith"); ---> Hello, Rohith  
// greet("Mohan")   --> Hello, Mohan
// 4. Create a function add(a, b) that returns the sum and
//     store the result inside a variable called result. Print result.

//     function add(a,b){
//         return a +b;
//     }
//     let result = add(2,2);
//     console.log(result);   ---> 4
 
// 5. What is the output?
// function test(a = 10, b = 5) {
//   return a - b;
// }
// console.log(test());  ---> 5
// console.log(test(20)); ---> 15

// 6. Write a function expression (store function in a variable
// called sayHi that prints "Hi!". Call it.

// let sayhi= function () {
//     console.log("Hi!!");
// }
// sayhi(); --> Hi!!


// 7. Write an arrow function that cubes a number (x³). No curly braces, no return keyword.

// let cube = (x) => x* x * x
// console.log(cube(5)) ---> 125


// 8. Write a function that receives an object and prints its name and age.

// let obj = {
//     name : "Rohith",
//     age : 25,
//     city : "Mumbai"
// }

// function fun({name, age}){
//     console.log(name,age)
// }
// fun(obj);  //---> Rohith 25


// 9. Destructure the object inside function parameters and print only city and country.

// let fun = {
//     city : "Mumbai",
//     state : "Maharashtra"  
// }
 
// function obj ({city,state}){
//     console.log(city,state)
// }

// obj(fun) ---> Mumbai Maharashtra


// ✅ MEDIUM (10 Questions)
// Involving callbacks, rest operator, pure/impure, closures, higher order functions.
// **11. Write a HOF applyOperation(a, b, operation)
// where operation is a function (add, subtract, etc.).**
// Call:
// applyOperation(5, 5, function(x,y){ return x+y; })

// **12. Create a function using REST operator sumAll(...nums)
// that returns the total of all numbers passed.**
// 13. What is the output?
// let a = 10;
// function increase() {
//   a++;
// }
// increase();
// increase();
// console.log(a);
// (Explain pure or impure)
// 14. Write a pure function multiply(a, b) and prove it is pure.
// 15. Write a closure function counter() that returns an inner function which increments a private count variable.
// Example:
// const c = counter();
// c(); // 1
// c(); // 2
// 16. Write an IIFE that prints "JS Developer"
// 17. Given the object:
// let student = { name: "Aman", marks: 90, city: "Delhi" };
// Write a function that returns only marks and city.
// 18. Convert this to arrow function:
// function greetUser(name) {
//   return "Hello " + name;
// }
// **19. Write a function executeNTimes(fn, n)
// that executes fn exactly n times.**
// 20. Create a function that accepts another function and an array, and calls the function on each element (forEach manually).
// ________________________________________

// 11. Write a HOF applyOperation(a, b, operation)
// where operation is a function (add, subtract, etc.).**
// Call:
// applyOperation(5, 5, function(x,y){ return x+y; })
// Ans starts 

// function applyOperation(a, b, operation){
//     return operation(a, b);
// }
// console.log(applyOperation(5, 5, function(x, y){
//     return x + y;
// })); ---> 10

// Execution Flow:applyOperation receives these arguments.It
// executes: return operation(a, b);This translates to: return
// (function(x, y) { return x + y; })(5, 5);The anonymous function
// adds $5$ and $5$.The anonymous function returns 10.



// 12. Create a function using REST operator sumAll(...nums)
// that returns the total of all numbers passed.

// function sumAll(...num){

// return num.reduce((acc,val)=> acc + val ,0)

// }
// console.log(sumAll(1,2,3,4,5)) ---> 15


// I tried the same sum with map, but it didn't give me the sum of all values

// function sum(...num){
    
//     return num.map((val) => val + val)
// }
// console.log(sum(1,2,3,4,5));   - [ 2, 4, 6, 8, 10 ]

// Why map() Doesn't Work for Summation
// The map() method is designed for transformation, not
// aggregation.

// Rest Operator: When you call sum(1, 2, 3, 4, 5),
// the rest operator (...num) correctly turns the arguments into 
// an array: num is [1, 2, 3, 4, 5].map()

// Action: The map() method iterates through every element in the
// array and applies the callback function (val => val + val).

// Result: It creates a new array where each element is the
// original element added to itself (doubled):$1 \rightarrow 1 + =
// 2$$2 \rightarrow 2 + 2 = 4$

// I asked ai this 
// The map() method iterates through every element in the array
// and applies the callback function so the reduce method
// isn't applying callback function ?

// That's a very insightful question that gets right to the core difference between JavaScript's array methods!

// The short answer is: No, it's not that reduce() doesn't apply a callback function; it's that it applies the callback for a fundamentally different purpose than map().

// Both map() and reduce() are Higher-Order Functions and both iterate through every element in the array and apply a callback function.

// The Key Difference in Callback Purpose
// The difference lies in what the callback function is expected to return and what the final method returns.
// 1. map(): Transformation (One-to-One)
// Parameter Tested	map()
// Callback Goal	To transform the current element.
// Callback Return	The new value for that element.
// Method Return	A new array of the exact same length, containing all the transformed values.
// Example	[1, 2, 3].map(x => x * 2) returns [2, 4, 6].

// So if we want exact same length of transformed values then we can use map

// 14. Write a pure function multiply(a, b) and prove it is pure.

// function mul(a,b){
//     return a * b
// }
// console.log(mul(5,2)) ---> 10

// 15. Write a closure function counter() that returns an inner function which increments a private count variable.
// Example:
// const c = counter();
// c(); // 1
// c(); // 2

// const c = function counter(){
//     let value = 20;

//  function val(){
//      value++
//         console.log(value)
//     }
//     return val
// }
// let res = c();
// res()  21
// res()  22
// res()  23

// 16. Write an IIFE that prints "JS Developer"

// (function (){
//     console.log("JS Developer")
// }
// ()) ---> JS Developer


// 17. Given the object:
// let student = { name: "Aman", marks: 90, city: "Delhi" };
// Write a function that returns only marks and city.
// let student = {
//     name: "Aman",
//     marks: 90,
//     city: "Delhi" };
    
//     function fun(obj){
//         console.log(obj.marks, obj.city) 
//     }
// fun(student) ---> 90 Delhi


// 18. Convert this to arrow function:
// function greetUser(name) {
//   return "Hello " + name;
// }

// let greet = (name) => "Hello "+ name
// console.log(greet("Rohith "))  ---> Hello Rohith 


// 19. Write a function execute(fn, n) that executes fn exactly n times.
// function execute(fn,n){
//     for(let i = 0; i < n; i++){
//     fn();
// }}
// execute ( () => console.log("Hello"),3);
// Hello
// Hello
// Hello

// Code Line	Type	Explanation
// function execute(fn, n){	Function Header	This defines a function named execute. It's a Higher-Order Function because it accepts another function as an argument (fn). It takes two parameters: fn (a function to be executed) and n (the number of times to execute it).
// for(let i = 0; i < n; i++){	Loop Start	This initiates a standard for loop. The loop variable i starts at 0, continues as long as i is less than the value of n, and increments i by 1 after each iteration. This ensures the loop runs exactly n times.
// fn();	Execution	This is the core action. It calls the function that was passed into execute (the callback function). This line executes once per loop iteration.
// }	Loop End	Closes the body of the for loop.
// }	Function End	Closes the body of the execute function.


// Code Line	Type	Explanation
// execute ( () => console.log("Hello"), 3 );	Function Call	This executes the execute function with two arguments:
// ()		Argument 1 (fn): An anonymous arrow function that prints the string "Hello" to the console. This is the callback function.
// 3		Argument 2 (n): The number 3.




// 20. Create a function that accepts another function and an
// array, and calls the function on each element (forEach manually
// ).
// function myForEach(arr, fn){
//     for(let i = 0; i < arr.length; i++){
//         fn(arr[i]);
//     }
// }
// myForEach([1,25,45,"Jerry", "Tom","true"], (x) => console.log(x));
// Ans- 
// 1
// 25
// 45
// Jerry
// Tom
// true

// Explanation

// Code Line	Type	Explanation
// function myForEach(arr, fn){	Function Header	This defines a function named myForEach. It's a Higher-Order Function because it accepts another function as an argument (fn). It takes two parameters: arr (the array to iterate over) and fn (the function to be executed for each element).
// for(let i = 0; i < arr.length; i++){	Loop Start	This initiates a standard for loop. It iterates from index 0 up to, but not including, the length of the array (arr.length). This ensures every element in the array is visited exactly once.
// fn(arr[i]);	Execution	This is the core action. In each iteration, it calls the function passed as fn (the callback function), providing the current array element (arr[i]) as an argument.
// }	Loop End	Closes the body of the for loop.
// }	Function End	Closes the body of the myForEach function.

// Code Line	Type	Explanation
// myForEach([1, 2, 3], (x) => console.log(x));	Function Call	This executes the myForEach function with two arguments:
// [1, 2, 3]		Argument 1 (arr): The array that will be iterated.
// (x) => console.log(x)		Argument 2 (fn): An anonymous arrow function that takes one parameter x and prints its value to the console. This is the callback function.


// function myForEach(arr, fn){
//     for(let i = 0; i < arr.length; i++){
//         fn(arr[i]);
//     }
// }
// myForEach([10, 20, 30], function(num){
//     console.log(num);
// });

// -----------------------------------------------------------------------
// function myForeach(arr, callback){
//     for(let i = 0; i<arr.length; i++){
//         callback(arr[i],i)
//     }
// }
// const arrval = [10,"Bheem", 20];

// myForeach(arrval, function (val, ind){
//     console.log(val,ind)
// });
// Ans
// 10 0
// Bheem 1
// 20 2

// This single line tells the myForEach function: -         callback(arr[i],i)
// 1.	"Take the function I received (the callback)."
// 2.	"Execute it on the current item."
// 3.	"Provide two pieces of data to that function: the value of the element (arr[i]) and its index (i)."
// function myForeach(arr, callback){
//         callback(arr[i],i)
// myForeach(arrval, function (val, ind){
//     console.log(val,ind)
// });

// What is the High Order function is that, it takes another function as an argument to pass their parameters, in the above sum it is 2 parameters, arr, callback 
// Arr is ok, we have defined it in array
// 2nd callback parameter in the next line itself we're calling it and adding it arr[i],i is actually what we define in val and index 

// If avoiding the HOF pattern, you rewrite a new function each time for different behaviors:



// Side-by-Side Comparison
// Using the same applyOperation example, here's the difference between rewriting without HOF versus reusing one HOF.
// Without HOF (Rewrite Each Time)
// Create a new function for every operation:
// Javascript 
// // Rewrite 1: For doubling
// function doubleNum(num) {
//     return num * 2;
// }
// console.log(doubleNum(5)); // 10

// // Rewrite 2: For squaring
// function squareNum(num) {
//     return num * num;
// }
// console.log(squareNum(5)); // 25

// // Rewrite 3: For incrementing
// function incrementNum(num) {
//     return num + 1;
// }
// console.log(incrementNum(5)); // 6
// Each function duplicates the input-output structure.
// With HOF (Single Function, No Rewriting)
// Define the HOF once, pass different operations:
// javascript
// function applyOperation(num, operation) {
//     return operation(num);
// }

// const double = function(x) {return x * 2}
// const square = x => x * x;
// const increment = x => x + 1;

// console.log(applyOperation(5, double));     // 10
// console.log(applyOperation(5, square));     // 25
// console.log(applyOperation(5, increment));  // 6
// The HOF applyOperation remains identical; only the passed function changes, avoiding repeated code.

// I asked Ai this --
// isn't HOF looks like First class function, that is also lke you don't need to write again and again

// First-Class vs Higher-Order Functions
// First-class functions and higher-order functions (HOF) are related but distinct: JavaScript treats all functions as first-class citizens, meaning they can be assigned to variables, passed as arguments, or returned like any value. HOFs build on this by specifically taking functions as arguments or returning them.geeksforgeeks+1
// Key Differences
// Aspect	First-Class Functions	Higher-Order Functions
// Definition	Functions treated as values (assignable, passable, returnable)	Functions that operate on other functions (accept or return them)
// Example	const fn = x => x*2; (assigned to variable)	applyOperation(5, fn) (HOF accepts function)
// Requirement	Language feature (JS supports it)	Depends on first-class support geeksforgeeks


// Why They Look Similar
// Both avoid rewriting by reusing functions, but first-class is the capability (e.g., storing double in a variable), while HOF is the usage (e.g., applyOperation calling the passed function). Without first-class functions, HOFs couldn't exist—double must be passable first.javascript.plainenglish+1
// In the example, double is first-class (stored as value), and applyOperation is HOF (uses it as argument). This combo enables the no-rewrite benefit.geeksforgeeks

// Key Difference: Reference vs. Value
// •	Function reference passed: double is the function; calling applyOperation(5, double) sends the function to be invoked later with num.
// •	Not a variable value: If it were applyOperation(5, 10), operation would receive the number 10, causing an error when operation(5) tries to call a number as a function.
// •	Proof it works: The HOF executes double(5) internally, proving the function was passed and used with parameters.





// function myForEach(arr, fn){
//     for(let i = 0; i < arr.length; i++){
//         fn(arr[i]);
//     }
// }
// myForEach([10, 20, 30], function(num){
//     console.log(num);
// });  ---> 10 20 30 

// Above the method is hard written manual foreach as we wrote the values in arguments
// Below one is already given in let so we neatly implememtned HOF and callback accessed and returned in 

// let are = [10,20,30,"KO"];

// function apply(ary,fn){
// for(let i =0; i<are.length; i++){    
//     fn(ary[i]) //--> Pass the element at the current index (ary[i])
// }}
// apply(are,function (x){
//     console.log(x)
// }) ---> 10 20 30 KO

// const myArray = [10, 20, 30];

// // This is the standard, non-manual way:
// myArray.forEach(function(num,ind) {
//     console.log(num,ind);
// });   // Output: 10 0, 20 1, 30 2


// ________________________________________
// ✅ HARD (10 Questions)
// Closure-heavy, callback logic, HOF logic, real interview–style.
// 21. Create a function createAdder(x) that returns a new function adding x to any number.
// Example:
// const add10 = createAdder(10);
// console.log(add10(5)); // 15
// 22. Implement your own .filter() using a Higher Order Function.
// Function name: myFilter(arr, fn).
// **23. Use rest operator to build a function findMax(...nums)
// WITHOUT using Math.max().**
// 24. What is the output? Explain closure + lexical environment.
// function outer() {
//   let count = 1;
//   return function() {
//     count++;
//     console.log(count);
//   }
// }
// const fn = outer();
// fn();
// fn();
// fn();
// **25. Write a HOF compose(f, g)
// that returns a new function:
// compose(f, g)(x) → f(g(x)).
// 26. Write a function that takes an object and returns a NEW modified object without changing the original (pure function requirement).
// **27. Implement a function once(fn)
// that allows a function to run only one time.
// Example:
// const helloOnce = once(() => console.log("Hello"));
// helloOnce(); // prints
// helloOnce(); // does nothing
// 28. Convert this normal function to a fully minimized arrow function:
// function area(length, width) {
//   return length * width;
// }
// 29. Use destructuring in parameters + rest operator together:
// Write a function:
// function logUser({name, ...rest}) { ... }
// Print name and rest.
// **30. HARD: Write a function createBank(balance)
// that returns deposit() and withdraw() functions using closure.**
// Example:
// const bank = createBank(1000);
// bank.deposit(500);  // 1500
// bank.withdraw(200); // 1300


// function add(x,y=10){
//     return x + y
// }
// console.log(add(5))  15 console.log(add(6))   16 console.log(add(7))  17

// 21. Create a function createAdder(x) that returns a new function adding x to any number.
// Example: const add10 = createAdder(10); console.log(add10(5)); // 15
// function createAdder(x){
//     return function(y){
//         return x + y
//     }
// }
// const add10 = createAdder(10);
// console.log(add10(5))  //---> 15

// const add50 = createAdder(2);
// console.log(add50(50)) ---> 52

// 22. Implement your own .filter() using a Higher Order Function.
// Function name: myFilter(arr, fn).

// function myFilter(arr,fun){
//     let result = [];
// for(let i = 0; i < arr.length; i++){
//     if (fun(arr[i])) {
//         result.push(arr[i]); 
//     }
// }    return result;     
// } 

// console.log(myFilter([10,20,30,40,50,60], (x) => x>20));
// [ 30, 40, 50, 60 ]

// Starting with defining the array and then filtering it 
// let arr = [10,20,30,40,50,60];
// let result = [];
// function filt(ary , val){
// for(let i =0; i<arr.length; i++){
//     if(val(ary[i])){
//         result.push(ary[i])   }} 
// return result
//  } 
// let res = filt(arr, function (x){
//    return x > 20; 
// });
// console.log(res)  ---> [ 30, 40, 50, 60 ]


// 23. Use rest operator to build a function findMax(...nums)
// WITHOUT using Math.max().**


// Values writing in the ans of highorder method, 


// function findmax(...num){
    
//     return num.reduce((acc, val)=>{
//          return val > acc ? val : acc 
//     });
// }
// console.log(findmax(21,54,87,63)) ---> 87


// let abc = [ 21,54,87,63 ];

// let res = abc.reduce((acc, val) => {
// return val > acc ? val : acc;

// })
// console.log(res) --->  87


// let abc = [ 21,54,87,63 ];
// let res = abc.reduce((acc, val) => {
//     if( val > acc){
//     return   val                
// } else {
//     return acc
// }
// })

// console.log(res)  -->  87

// 24. What is the output? Explain closure + lexical environment.
// function outer() {
//   let count = 1;
//   return function() {
//     count++;
//     console.log(count);
//   }
// }
// const fn = outer();
// fn(); 2
// fn(); 3
// fn(); 4


// 25. Write a HOF compose(f, g) that returns a new function:
// compose(f, g)(x) → f(g(x)).


// function compose(f, g){
//     return function(x){
//         return f(g(x));
//     }
// }

// // Example:
// const add2 = x => x + 2;
// const mul3 = x => x * 3;

// console.log(compose(add2, mul3)(5)); // 17



// 26. Write a function that takes an object and returns a NEW modified object without changing the original (pure function requirement).
// const user = {
//     name: "Alex",
//     age: 30,
//     city: "SF"
// };
// function modifyUser(obj){
//     return {
//         ...obj,          // 1. Copies ALL properties from the original
//                                 //'obj' into a new object.
//         age: obj.age + 1 // 2. OVERWRITES the 'age' property with the 
//                                     //new value.
//     };
// }
// // Call the pure function
// const updatedUser = modifyUser(user);

// console.log(updatedUser); 
// // Output: { name: "Alex", age: 31, city: "SF" }

// console.log(user); 
// // Output: { name: "Alex", age: 30, city: "SF" } 
// // The original object is UNCHANGED (pure function achieved).

// { name: 'Alex', age: 31, city: 'SF' }
// { name: 'Alex', age: 30, city: 'SF' }


// **27. Implement a function once(fn) that allows a function to run only one time.
// Example:
// const helloOnce = once(() => console.log("Hello"));
// helloOnce(); // prints
// helloOnce(); // does nothing
// function once(fn){
//     let called = false;
//     return function(){
//         if(!called){
//             called = true;
//             return fn();
//         }
//     };
// }

// const sayHello = () => console.log("Hello, World!");
// const helloOnce = once(sayHello);

// helloOnce(); // Output: Hello, World! (Execution happens here)
// helloOnce(); // Output: (Nothing happens)
// helloOnce(); // Output: (Nothing happens)


// 28. Convert this normal function to a fully minimized arrow function:
// function area(length, width) {
//   return length * width;
// }

// const area = (l, w) => l * w;
// const area = (length, width) => length * width;

// console.log(area(5, 10));  // 50

// 29. Use destructuring in parameters + rest operator together:
// Write a function:
// function logUser({name, ...rest}) { ... } Print name and rest.

// function logUser({ name, ...rest }){
//     console.log(name);
//     console.log(rest);
// }

// logUser({
//     name: "Rohit",
//     age: 20,
//     city: "Chennai",
//     role: "Developer"
// });
// Rohit
// { age: 20, city: 'Chennai', role: 'Developer' }


// 30. HARD: Write a function createBank(balance)
// that returns deposit() and withdraw() functions using closure.

// Example:
// const bank = createBank(1000);
// function createBank(balance){
//     return {
//         deposit(amount){
//             balance += amount;
//             console.log(balance);
//         },
//         withdraw(amount){
//             balance -= amount;
//             console.log(balance);
//         }
//     };
// }

// const bank = createBank(1000);

// bank.deposit(500);   // 1500
// bank.withdraw(200);  // 1300
// bank.deposit(300);   // 1600




                         