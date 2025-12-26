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


//UPI Payment Attempts (while)
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


