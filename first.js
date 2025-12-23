                      // IF, IF ELSE / CONDITIONS REVISION

// 🚀 LEVEL 1 — Warm-up (Basic Logic, but Real Life)
// 1️⃣ WhatsApp Login Attempts (while + break)
// Ask user to type a 4-digit PIN.
// Stop immediately when:
// •	Correct PIN entered → print “Logged in”
// •	3 wrong tries → print “Account locked”


// let attempt = 0;
// let count = 0;
// let pass = 4444;
// while(attempt < 3 && count < 3 ){
//     let pin = +prompt("give pin ?")
//         count++;    
// if(pin === pass) {
//     console.log("Logged in" )

//         break; 
// } else if(count === 3 || count === 0) {
//     console.log("Account Locked")
// }}
// give pin ?10
// give pin ?4444
// Logged in





// 2️⃣ Count Likes Until Limit (for loop + condition)
// You have 10 posts.
// Print only posts with likes > 100, but stop after printing 5  posts.
// const posts = [50, 12, 300, 105, 500, 250, 90, 180, 40, 700];

// let count = 0;
// for(let i = 0; i < posts.length; i++){
//     if(posts[i] >100){
//         console.log(i, posts[i] )
//         count++;
// }   
//     if(count === 5){
//         break;
//  }}  Ans
// 2 300 3 105 4 500 5 250 7 180
 

// 3️⃣ E-commerce Stock Checker (if-else + loop)
// Given product quantities:
// [5, 0, 2, 10, 0, 4]
// Print:
// •	“In Stock” if qty > 0
// •	“Out of Stock” if qty === 0


// let qty = [5, 0, 2, 10, 0, 4];

// for(let i = 0; i < qty.length; i++){
//  const st = qty[i];
// if(st > 0){
//      console.log("In stock",st)
//  } else {
//      console.log("Out of stock", st)
//  }
// }

// 4️⃣ Count first 3 even numbers (for + break)
// Print only first 3 even numbers between 1–100.

// let count = 0;
// for(let i = 1; i<100; i++){
//     if(i%2 === 0 ){       
//         console.log(i)
//     count++;
// } if(count === 3) {
//     break;
// } 
// } 2 4 6


// 5️⃣ Amazon Cart Total (forEach + if)
// Given cart prices:
// [200, 500, 1200, 50, 999]
// Calculate total.
// If any item is more than 1000, print “Luxury Item Detected!”


// const cart = [299, 1500, 450, 999, 1200];

// let total = 0;

// cart.forEach((price) =>{
//  total += price    
//     if(price > 1000){
//         console.log("Luxury item detected!")
//     }
// })
// console.log(total)
// Luxury item detected!
// Luxury item detected!
// 4448

// 6️⃣ Instagram Username Validator (while + continue)
// Keep asking user for a username until:
// •	No spaces
// •	At least 3 characters
// •	All lowercase
// Use continue to reject bad inputs.

// while(true){
//     const ask = prompt("What's your username ?")
//     if(ask.includes(" ")){
//         alert(" NO spaces") 
//     continue;
//     } 
//     if(ask.length < 3  ){
//         alert(" Must be three characters ")
//     continue; 
//     }
//     if(ask != ask.toLowerCase() ){
//         alert("Must be in lowercases")
//         continue; 
//     } console.log("successful attempt")
//     break;
// }
// What's your username ?FGHD ZDFHZDF
//  NO spaces
// What's your username ?FDGD
// Must be in lowercases
// What's your username ?as
//  Must be three characters 
// What's your username ?ass
// successful attempt


// IF method based on the given array, it gives the valid ones

// const usernames = ["ra", "ro hit", "Rohan", "aj", "mike", "sam", "anbu"];

// let i = 0;

// while (i < usernames.length) {
//     const user = usernames[i];
//     i++;

//     // 1) Reject if it contains spaces
//     if (user.includes(" ")) {
//         continue;
//     }

//     // 2) Reject if shorter than 3 characters
//     if (user.length < 3) {
//         continue;
//     }

//     // 3) Reject if not all lowercase
//     if (user !== user.toLowerCase()) {
//         continue;
//     }

//     // If it passed all checks, print it
//     console.log("Valid Username:", user);
// }


// 7️⃣ UPI Payment Attempts (while)
// User enters payment PIN. Run at least once.
// Stop when: Correct PIN	OR  attempts reached 5

// let pass = "Nexus";
// let count = 0;

// while(count < 5){
//  let pin = prompt("What's your password ?")
//     count++;
//     if(pin === pass){
//         console.log("Correct Pin")
//         break;
//     }
//     else if (count === 5){
//     console.log("Max times reached")
//     }
// }
// What's your password ?Nexus
// Correct Pin
// ------------------------


// 8️⃣ Google Contacts Search (for of)
// Given:
// const contacts = ["Ravi", "Ranjith", "Rohit", "Ram", "Rahul"];
// Search for a name:
// If found → print “Found at position X”.
// Use for…of.

// const contacts = ["Ravi", "Rakesh", "Rohit", "Ram", "Rahul"];
// search = "Rohit"
// for(let[index, val] of contacts.entries()){
//     if( val === search){
//     console.log(`${search} is found at ${index}nd position ` )
//      break;
//  } }
// Rohit is found at 2nd position 





// 🚀 LEVEL 3 — Intermediate Product-Level
// 9️⃣ Count frequency of every fruit (for in + object)
// Given:
// ["apple", "banana", "apple", "mango"]
// Output:
// { apple: 2, banana: 1, mango: 1 }

// 🔟 Flipkart Discount Engine (if-else + switch)
// Input coupon code:
// •	SALE10 → 10%
// •	SALE20 → 20%
// •	WELCOME → ₹100 off
// •	INVALID → show message
// Use switch case.

// 1️⃣1️⃣ Credit Score Evaluator (ternary operator)
// If score > 750 → “Good”
// Else → “Bad”
// One-line ternary.

// 1️⃣2️⃣ Detect First Negative Number (continue + break)
// From an array, skip positive numbers.
// Stop when you hit first negative.
// ________________________________________



// 9️⃣ Count frequency of every fruit (for in + object)
// Given:
// ["apple", "banana", "apple", "mango"]
// Output:
// { apple: 2, banana: 1, mango: 1 }

// let fruits = ["apple", "banana", "apple", "mango"];

// let grow = Object.groupBy(fruits, tree => tree)
// let result = {};
// for(let key in grow){
//     result[key] = grow[key].length;
// }
// console.log(result)
// { apple: 2, banana: 1, mango: 1 }

// FOR Loop

// let fruits = ["apple", "banana", "apple", "mango"];

// let freq = {};
// for(let i =0; i<fruits.length; i++){
//     const fal = fruits[i]
//     if(freq[fal]){
//         freq[fal] += 1;
// } else{
//     freq[fal] = 1; 
// } 
//     }
// console.log(freq) --> { apple: 2, banana: 1, mango: 1 }


// 🔟 Flipkart Discount Engine (if-else + switch)
// Input coupon code:
// •	SALE10 → 10%
// •	SALE20 → 20%
// •	WELCOME → ₹100 off
// •	INVALID → show message
// Use switch case.


// 🔟 Flipkart Discount Engine (if-else + switch)
// Input coupon code:
// •	SALE10 → 10%      SALE20 → 20%
// •	WELCOME → ₹100 off  INVALID → show message
// Use switch case.

// let coupon = prompt("Enter the coupon code here").toUpperCase();
// let amount = +prompt("Enter the total amount") 
// let finalPrice;


// const usernames = ["ra", "ro hit", "Rohan", "aj", "mike", "sam", "anbu"];

// let i = 0;

// while (i < usernames.length) {
//     const user = usernames[i];
//     i++;

//     // 1) Reject if it contains spaces
//     if (user.includes(" ")) {
//         continue;
//     }

//     // 2) Reject if shorter than 3 characters
//     if (user.length < 3) {
//         continue;
//     }

//     // 3) Reject if not all lowercase
//     if (user !== user.toLowerCase()) {
//         continue;
//     }

//     // If it passed all checks, print it
//     console.log("Valid Username:", user);
// }



// frequency of every fruit (for in + object)
// Given:
// ["apple", "banana", "apple", "mango"]
// Output:
// { apple: 2, banana: 1, mango: 1 }

// How much ever the boxes you have it'll automatically come down when the screen hits 200px, as long as 100px it'll be right and then it'll overflow

// With grid we use mostly align items and justify items not content, if we use justify-content : right,  then it'll take all small boxes in right 
// Place items : center end  align and justify items shorthand 
// To use align items and justify items, first give inside small boxes height and width so that you can move around it


// What it is: Destructuring is a convenient JavaScript syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables.

// How it works here: In each iteration, the for...of loop provides a two-element array (e.g., [0, "Ravi"]). The destructuring assignment [index, name] immediately takes that array and assigns its elements to the declared variables:

// The first element (the index, e.g., 0) is assigned to the variable index.

// The second element (the value/name, e.g., "Ravi") is assigned to the variable name.
         