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



// I asked Ai this

// for (const [index, name] of contacts.entries()) {

//      explain me this one line, I often used for(const kay of conatcts) entries ok I understood because we are accessing the array's entries, what [ index,name ] is ?

// Array Destructuring ([index, name])
// This is the key to your question.

// What it is: Destructuring is a convenient JavaScript syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables.

// How it works here: In each iteration, the for...of loop provides a two-element array (e.g., [0, "Ravi"]). The destructuring assignment [index, name] immediately takes that array and assigns its elements to the declared variables:

// The first element (the index, e.g., 0) is assigned to the variable index.

// The second element (the value/name, e.g., "Ravi") is assigned to the variable name.
// ----------------------------------------------------------------------------------







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

// switch(coupon) {
//     case "SALE20" :
//     finalPrice = amount - amount * 0.20;
//     console.log(coupon,"Applied")
// break;    
//     case "SALE10" :
//     finalPrice = amount - amount * 0.10;
//     console.log(coupon, "Applied")
// break;
//     case  "WELCOME" :
//     console.log(coupon, "Applied")    
//     finalPrice = amount - 100;
// break;
// default :
// console.log("Invalid coupon code")
// finalPrice = amount ;   
// }
// console.log("Your final amount", finalPrice)

// Enter the coupon code hereSALE20
// Enter the total amount8640
// SALE20 Applied
// Your final amount 6912


// 1️⃣1️⃣ Credit Score Evaluator (ternary operator)
// If score > 750 → “Good” Else → “Bad” One-line ternary.

// let mark = 500;
// let score = mark < 750 ?  "Good" : "Bad"
// console.log(score) Good



// 1️⃣2️⃣ Detect First Negative Number (continue + break)
// From an array, skip positive numbers.
// Stop when you hit first negative.

// let nos = [10,20,30,0,-54,-12,50,30]

// for(let i = 0; i < nos.length; i++){
//     if(nos[i] > 0 )
//   {console.log(nos[i])
//        continue;
//   }
//     if(nos[i] < 0) {
// console.log(nos[i])
// break;
//  } 
// } 
// 10
// 20
// 30
// -54
// ---------
//  LEVEL 4 seems DSA, will catch up later 
// -----------
// 🚀 LEVEL 5 — Hard / Product Company Style
// 1️⃣6️⃣ ATM Simulator (loop + condition + break)
// Withdraw until:
// •	Balance ends
// •	Or attempts exceed 3
// •	Or user enters negative value
// 1️⃣7️⃣ Password Strength Validator (while + continue)
// Ask until:
// •	min length 6
// •	one number
// •	one capital letter
// •	one special char
// Use continue for invalid attempts.
// 1️⃣8️⃣ Order Tracking System (switch + loop)
// Order status:
// •	pending
// •	packed
// •	shipped
// •	delivered
// Switch-case for each status.
// 1️⃣9️⃣ Print 1st 3 odd numbers WITHOUT modulo (%)
// Product companies LOVE this.
// 2️⃣0️⃣ Recursively remove all vowels from a string
// Input: "javascript" → "jvscrpt"

// -----

// 1️⃣6️⃣ ATM Simulator (loop + condition + break)
// Withdraw until:
// •	Balance ends
// •	Or attempts exceed 3
// •	Or user enters negative value

// let balance = 0;
// let attempt = 0;

// while( balance <= 1000 && attempt <= 3){
// let ask = prompt("how much you want?")
//    attempt++;
//     if(ask > 1000){
//         console.log("Account is empty")
//         break;
//     } else if( attempt ===3 ){
//         console.log("Attempt is Over")
//         break;
//     } if(ask <= 0){
//         console.log("enter positive values")
//         break;
//     } 
//      balance -= ask;
//     console.log("Succesfully withdrawn")
// }

// 1️⃣7️⃣ Password Strength Validator (while + continue)
// Ask until:
// •	min length 6
// •	one number
// •	one capital letter
// •	one special char
// Use continue for invalid attempts.

// 1️⃣7️⃣ Password Strength Validator (while + continue)
// Ask until:
// •	min length 6
// •	one number
// •	one capital letter
// •	one special char
// Use continue for invalid attempts.


// while(true){
//     const ask = prompt("What is your password ?");
//     if(ask.length < 6){
//     alert("Password should have minimum 6 characters")
//     continue;
// }  if(!/[A-Z]/.test(ask)){
//     alert("Password should have 1 capital letter")
//     continue;
// } if(!/[0-9]/.test(ask)){
//     alert ("Password should have 1 numerical character")
// continue;
// } if(!/[!@#$%^&*(),.?":{}|<>]/.test(ask)){
//     alert("Password should have 1 Special character")
//     continue;
// } console.log("Unlocked", ask);
// break;
// }

// What is your password ?54531316541
// Password should have 1 capital letter
// What is your password ?kushediufkjBHeifd
// Password should have 1 numerical character
// What is your password ?A1fsghtyg
// Password should have 1 Special character
// What is your password ?"Nexus2"
// Unlocked "Nexus2"



         