                 
//                  OBJECTS - Revision
// Perfect! 🎉
// I’ll give you 30 PRODUCT-BASED interview questions (Easy, Medium, Hard) ONLY from the topics you studied:
// ✔ Objects (creation, access)
// ✔ Nested Objects
// ✔ Delete / Modify
// ✔ Object.assign
// ✔ Spread operator
// ✔ Shallow Copy vs Deep Copy
// ✔ structuredClone
// ✔ Destructuring (Object + Array + Nested)
// ✔ Functions inside objects
// ✔ __proto__ (Prototype)
// ✔ Computed Properties
// ✔ Why arrays are objects
// ✔ Everything related to Object Basics
// No DOM. Only OBJECTS.
// No answers, only interview-style problem statements.
// This makes it perfect revision + real interview simulation.
// ________________________________________
// ✅ EASY – 10 Questions
// (Direct output, simple logic, property access)
// 1. Basic Object Access
// Create an object student with properties name, age, score. Print the score using both dot and bracket notation.
// 2. Modify Properties
// Given:
// const emp = { name: "Aman", salary: 40000 };
// Change the salary to 55000 and print final object.
// 3. Delete a Property
// Delete the property age from:
// const user = { name: "Rohit", age: 25, city: "Mumbai" };
// 4. Access Key With Space
// Access "account balance" from this object:
// const bank = {
//   name: "Raj",
//   "account balance": 5000
// };
// 5. Array Inside Object
// Print the 3rd value from:
// const info = { marks: [10, 20, 30, 40] };
// 6. Object Inside Object
// Print the pincode:
// const user = { address: { city: "Pune", pincode: 442200 } };
// 7. Create Object Using new Object()
// Add 3 properties using dot notation.
// 8. Object.keys() Output
// What does this print?
// const obj = { a:1, b:2 };
// console.log(Object.keys(obj));
// 9. Object.values() Output
// Predict output:
// Object.values({ lang:"JS", level:1 });
// 10. Computed Property
// What is the final object?
// let role = "admin";
// const obj = { [role]: "Rakesh" };
// ________________________________________


// 1. Basic Object Access
// Create an object student with properties name, age, score. Print the score using both dot and bracket notation.
// let stu= {
//     name : "Rohith",
//     age : 55,
//     score: 100
// }
// console.log(stu.score) ---> 100
// console.log(stu["score"])  ---> 100

// 2. Modify Properties Given:
// const emp = { name: "Aman", salary: 40000 };
// Change the salary to 55000 and print final object.
// emp.salary = 55000
// console.log(emp)  --> { name: 'Aman', salary: 55000 }


// 3. Delete a Property --> Delete the property age from:
// const user = { name: "Rohit", age: 25, city: "Mumbai" };
// delete(user.age)
// console.log(user) ---> { name: 'Rohit', city: 'Mumbai' }

// 4. Access Key With Space
// Access "account balance" from this object:
// const bank = {
//   name: "Raj",
//   "account balance": 5000
// };
// console.log(bank["account balance"]) ---> 5000
// 5. Array Inside Object
// Print the 3rd value from:
// const info = { marks: [10, 20, 30, 40] };
// console.log(info.marks[3])  ---> 40

// 6. Object Inside Object modify and print the pincode:
// const user = { address: { city: "Pune", pincode: 442200 } };
// user.address.pincode = 500
// console.log(user.address.pincode)  --> 500

// 7. Create Object Using new Object()
// Add 3 properties using dot notation.
// let person = new Object();
// person.name = "Rohith",
// person.age = 62,
// person.city = "Mumbai",
// person.age = 22
// console.log(person)  --> { name: 'Rohith', age: 22, city: 'Mumbai' }

// 8. Object.keys() Output
// What does this print?
// const obj = { a:1, b:2 };
// console.log(Object.keys(obj));  --> [ 'a', 'b' ]

// 9. Object.values() Output Predict output:
// Object.values({ lang:"JS", level:1 });  ---> JS 1 



// 10. Computed Property What is the final object?
// let role = "admin";
// const obj = { [role]: "Rakesh" };
// console.log(obj)  ---> { admin: 'Rakesh' }


// ✅ MEDIUM – 10 Questions
// (Destructuring, spread, assign, nested access, shallow copies)
// 11. Object Destructuring
// Extract name & state from:
// const p = { name:"Kavi", city:"Chennai", state:"TN" };
// 12. Destructuring With Renaming
// Rename:
// name→fullName, city→town
// 13. Spread Operator Merge
// Merge using spread:
// let a = { x:1, y:2 };
// let b = { z:3 };
// 14. Object.assign
// Copy obj1 + obj2 into a new object:
// let obj1 = { a:10 };
// let obj2 = { b:20 };
// 15. Shallow Copy Behavior
// Predict output:
// let p1 = { a: 10, nested: { x:1 } };
// let p2 = p1;
// p2.nested.x = 100;
// console.log(p1.nested.x);


// 16. Nested Destructuring
// Extract doorno from:
// const house = { 
//   address: { city:"Delhi", doorno:55 }
// };
// 17. Array Destructuring Inside Object
// Extract 1st and 3rd number:
// const data = { arr:[50, 60, 70, 80] };
// 18. Rest Operator in Object
// Split:
// const emp = { name:"Rohan", age:25, city:"Goa", salary:30000 };
// Extract name, and store remaining in a new object.
// 19. Function Inside Object
// Call the function:
// const machine = {
//   start: function() { return "Machine Started"; }
// };
// 20. Why Array typeof is Object
// Print the type and access a value using bracket like object.
// ________________________________________

// 11. Object Destructuring Extract name & state from:
// const p = { name:"Kavi", city:"Chennai", state:"TN" };
// const { name,state} = p
// console.log(name,state) --> Kavi TN

// 12. Destructuring With Renaming
// Rename: name→fullName, city→town
//  const p = { name:"Kavi", city:"Chennai", state:"TN" };
// const { name : fullName, city : town  } = p
// console.log(fullName, town)  --> Kavi Chennai

//  13. Spread Operator Merge --> Merge using spread:
// let a = { x:1, y:2 };
// let b = { z:3 };
// let c = {...a,...b } 
// console.log(c) --> { x: 1, y: 2, z: 3 }

// 14. Object.assign Copy obj1 + obj2 into a new object:
// let obj1 = { a:10 };
// let obj2 = { b:20 };

// let obj3 = Object.assign(obj1,obj2)
// console.log(obj3)  --> { a: 10, b: 20 }
// I wanted to know how can we use array's values in spread 

// let obj1 = [10];
// let obj2 = [20, 30];

// // The target is a new empty array literal []
// // obj1 and obj2 are the source objects
// let result = Object.assign([], obj1, obj2);

// console.log(result);    --->  [20, 30]
// console.log(result.length);   --->  2



// 15. Shallow Copy Behavior  Predict output:
// let p1 = { a: 10, nested: { x:1 } };
// let p2 = p1;
// p2.nested.x = 100;
// console.log(p1); --> { a: 10, nested: { x: 100 } }
// console.log(p2)  --> { a: 10, nested: { x: 100 } }

// 16. Nested Destructuring -- Extract doorno from:
// const house = { 
//   address: { city:"Delhi", doorno:55 }
// };
// console.log(house.address.doorno) --> 55



// 17. Array Destructuring Inside Object -- Extract 1st and 3rd number:
// const data = { arr:[50, 60, 70, 80] };
// const { arr : [one, , three ]} = data;
// console.log(one,three) ---> 50 70

// 18. Rest Operator in Object Split:
// Extract name, and store remaining in a new object.
// const emp = { name:"Rohan", age:25, city:"Goa", salary:30000 };

// const {name, ...emp2} = emp
// console.log(name,emp2)  ---> Rohan { age: 25, city: 'Goa', salary: 30000 }


// 19. Function Inside Object  -- Call the function:
// const machine = {
//   start: function() { return "Machine Started"; }
// };
// console.log(machine.start()); --> Machine Started


// 20. Why Array typeof is Object
// Print the type and access a value using bracket like object.
// const myArray = ["apple", "banana", "cherry"];

// Print the type
// console.log(typeof myArray); // Output: object
//  console.log(myArray[1]);     // Output: banana



// ✅ HARD – 10 Questions
// (Deep vs Shallow copy with nested objects, prototype chain, trick-based destructuring, structuredClone, computed keys logic)
// 21. Deep Copy Using structuredClone
// Copy this object deeply and modify marks.math so original doesn't change:
// const student = {
//   name:"Hari",
//   marks:{ math:90, eng:85 }
// };
// 22. Object.assign + Nested Trap
// Predict:
// const user1 = {
//   name:"Rohit",
//   address:{ city:"Pune" }
// };
// const user2 = Object.assign({}, user1);
// user2.address.city = "Mumbai";
// console.log(user1.address.city);
// 23. Spread Operator + Nested Trap
// Predict:
// const a = { x:1, nested:{ z:50 } };
// const b = { ...a };
// b.nested.z = 500;
// console.log(a.nested.z);
// 24. Nested Object Destructuring + Rename
// Extract pincode as pin
// and state as st from:
// const profile = {
//   address:{
//     city:"Hyd",
//     pincode:887766,
//     state:"TS"
//   }
// };
// 25. Mixed Array + Object Destructuring
// Extract "JS" and 40:
// const mix = {
//   lang:["JS","Python","Java"],
//   numbers:[10,20,30,40]
// };
// 26. Prototype Chaining
// Use prototype so user2 can access user1 properties:
// let user1 = { city:"Delhi" };
// let user2 = { name:"Ravi" };
// 27. Create Your Own Prototype Method
// Add a method to all objects that returns "Hello Prototype"
// (use Object.prototype)
// 28. Challenging Computed Properties
// Predict:
// let key1 = "score";
// let key2 = 10;
// const obj = {
//   [key1]:"A+",
//   [key2]:"Ten",
//   true:"yes"
// };
// console.log(obj);  

// 29. Destructure and Skip elements
// Extract only 1st & 4th values:
// let arr = [99,80,70,60,50];
// 30. Deep Copy + Modify Nested + Prove Original Unchanged
// Use structuredClone to solve:
// const prod = {
//   id:1,
//   details:{
//     price:500,
//     stock:30
//   }
// };
// ________________________________________


// 21. Deep Copy Using structuredClone
// Copy this object deeply and modify marks.math so original doesn't change:
// const stu = {
//   name:"Hari",
//   marks:{ math:90, eng:85 }
// };
// console.log(stu) ---> { name: 'Hari', marks: { math: 90, eng: 85 } }
// const stud = structuredClone(stu)
// stud.marks.math = 50;
// console.log(stud)  ---> { name: 'Hari', marks: { math: 50, eng: 85 } }
// console.log(stu) - Original hasn't changed --> { name: 'Hari', marks: { math: 90, eng: 85 } }


// 22. Object.assign + Nested Trap  --> Predict:
// const user1 = {
//   name:"Rohit",
//   address:{ city:"Pune" }
// };
// const user2 = Object.assign({}, user1);
// console.log(user2)  -->{ name: 'Rohit', address: { city: 'Pune' } }
// user2.address.city = "Mumbai";
// console.log(user2.address.city); ---> Mumbai
// user2.name = "Mohit"
// console.log(user1); ---> { name: 'Rohit', address: { city: 'Mumbai' } }
// so it is a shallow copy, only outside nested changes 



// 23. Spread Operator + Nested Trap -- Predict output :
// const a = { x:1, nested:{ z:50 } };
// const b = { ...a };
// b.nested.z = 500;
// console.log(a.nested.z);  --> 500


// 24. Nested Object Destructuring + Rename
// Extract pincode as pin and state as st from:
// const profile = {
//   address:{
//     city:"Hyd",
//     pincode:887766,
//     state:"TS"
//   }
// };
// const {address : {pincode : pin , state : st}} = profile
// console.log(pin, st)  ---> 887766 TS


// 25. Mixed Array + Object Destructuring -- Extract "JS" and 40:
// const mix = {
//   lang:["JS","Python","Java"],
//   numbers:[10,20,30,40, [11,22], 50]
// };
// const {
//     lang: [one],
//     numbers : [,,,three ]
// } = mix                       
// console.log(one,three) //--> JS 40

// now accessed Python and 22
// const  {
//     lang : [,two],
//     numbers : [,,,,[,one]]  }  = mix 
// console.log(two,one)         //--->   Python 22

// 26. Prototype Chaining
// Use prototype so user2 can access user1 properties:
// let user1 = { city:"Delhi" };
// let user2 = { name:"Ravi" };

// user2.__proto__ = user1
// console.log(user2.city,user2.name)  ---> Delhi Ravi


// 27.Add a method to all objects that returns "Hello Prototype"
// (use Object.prototype)

// // Add a new method named 'sayHello' to Object.prototype
// Object.prototype.sayHello = function() {
//     return "Hello Prototype";
// };
// // 1. Regular Object
// const user = { name: "Alice" };
// console.log(user.sayHello()); // Output: Hello Prototype



// // 2. Array Object
// const data = [1, 2, 3];
// console.log(data.sayHello()); // Output: Hello Prototype

// // 3. Function Object
// function greet() {}
// console.log(greet.sayHello()); // Output: Hello Prototype

// Hello Prototype
// Hello Prototype
// Hello Prototype

// 28. Challenging Computed Properties
// Predict:
// let key1 = "score";
// let key2 = 10;
// const obj = {
//   [key1]:"A+",
//   [key2]:"Ten",
//   true:"yes"
// };
// console.log(obj);  ---> { '10': 'Ten', score: 'A+', true: 'yes' }

// 29. Destructure and Skip elements -- Extract only 1st & 4th values:
// let arr = [99,80,70,60,50];
// let [one,,,four] = arr
// console.log(one,four) ---> 99 60

// 30. Deep Copy + Modify Nested + Prove Original Unchanged
// Use structuredClone to solve:
// const prod = {
//   id:1,
//   details:{
//     price:500,
//     stock:30
//   }};
// const por = structuredClone(prod)
// por.details.price = 50; 
// console.log(prod) --> { id: 1, details: { price: 500, stock: 30 } }
// console.log(por)  ---> { id: 1, details: { price: 50, stock: 30 } }

                 
                         