// ✅ EASY LEVEL – (10 Questions)
// (These test your basics; similar to warm-up questions in product companies like Zoho, Freshworks, BrowserStack)


// 1. What will be the output?
// const emp = { id: 10 };
// emp.id = 20;
// console.log(emp.id);   20

// 2. What will cause an error?
// const user = { name: "Raj" };
// user = { name: "Kiran" };
// Why?
// if we are chnahing the name's value then it should be
// user.name = "Kiran"
// Immutability vs. Mutability:
// •	const does NOT make the value immutable. It only makes the variable binding immutable.
// •	Because the user variable holds an object (a reference type), the contents of that object can still be changed (mutated).


// 3. Write a program to print:
// "Hello Coder Army"
// using single quotes ' '.
// console.log(" 'Hello Coder Army' ")

// 4. What does this print?
// let msg = "Hello \nWorld";
// console.log(msg); Hello below World
 
// 5. Write a program to convert "HELLO" into lowercase.
// console.log("HELLO".toLowerCase())


// 6. How do you print the 4th character of "JavaScript" using array indexing?
// console.log("JavaScript"[4]) ---> S
// 7. What will indexOf() return?
// console.log("JavaScript".indexOf("S"))  ---> 4
// indexOf will return index no. of the value you entered

// 7. let s = "Hello world";
// console.log(s.indexOf("World")); -1 since capital W doesn't exist in s

// 8. What does this return?
// "Coder Army".includes("coder"); -1 small s doesn't exist 

// 9. Write code to remove spaces:
// let x = "   Hi JavaScript   "; 
// console.log(x.trim("")); Hi JavaScript

// 10What is the difference between these?
// 1.	"Hello".slice(1, 3);
// 2.	"Hello".substring(1, 3);
// Substring will also print negative indexes








// 🟨 MEDIUM LEVEL – (10 Questions)
// (These match questions asked in interviews of Paytm, Swiggy, Razorpay, Cars24, Airtel Digital)
// 1.	Reverse a string without using .reverse().


// This is for loop method of reversing the Array
// let str ="Today is Friday"; 
// let reverse = "";
// for(let i =str.length - 1; i >= 0; i--){
//       reverse += str[i];
// }
// console.log(reverse); -- yadirF si yadoT
// ------------------
// let result = str.split("").
// console.log(result);   ----> "f", "r",...,"y"
// --------------------
// let result = str.split("").reverse();
// console.log(result);   ----> "y", "a",...,"t"
// -----------------------
// let str = "Today is Friday";
// let result = str.split("").reverse("").join("")
// console.log(result);   ----> yadirF si yadoT
// ------------------------------


// String converting into an Array and then using reduce to reverse this
// let str = "Today is Friday";
// console.log(str.split("")) --> ['T', "o", ... , "y"]
//    let str = "Today is Friday";
// let result = str.split("").reduce((acc, val)=> {
//    return val + acc;
// }, "")
// console.log(result)  ---> yadirF si yadoT

// From the string: let str = "Today is Friday";
// extract "Friday" using slice() with negative index.

// 2.	Replace only the first "is" in:
// "This is JavaScript and this is fun"
// 3.	Replace all "is" with "was".
// 4.	Write code to count number of "Coder" in:
// "Hello Coder Army Coder Army Coder"

// 5.	Given:
// const obj = { id: 1, name: "Arun" };
// const copy = obj;
// obj.id = 100;
// console.log(copy.id);
// Why does it print 100? (Explain referencing)
// const obj = { id: 1, name: "Arun" };
// let cool = obj;
// cool.id = 100;
// obj.id = 200;
// console.log(cool.id);  --> 200
 
// obj.id = 300;
// console.log(cool.id);  --> 300
 
// why it printed 100 ? because the const is replaced with another const 
// const a = 10;
// let b = a;
// console.log(b) //---> 10

// const a = 10;
// let b = 20;
// a = b;
// console.log(a)  ---> Assignment to constant variable. Error
// here we can assign the cosnt to let only when let has no own variable and value 
// "we can assign the const to let only when let has no own variable and value"—isn't quite right. The issue is purely about which variable is on the left side of the assignment operator (=).
// The Only Rule for const
// The const keyword makes the variable immutable in terms of its binding (the reference it holds). It prevents the variable from being reassigned.
// The fundamental rule is: A variable declared with const can never appear on the left side of the assignment operator (=) after its initial declaration.

// The success of the assignment has nothing to do with whether the let variable (b) was initialized first. The assignment let b = a; would still work even if b had a value:
// const a = 10;
// let b = 50; // 'b' has its own value (50)
// b = a;      // 'b' is reassigned to 10 (still works fine)
// console.log(b); // 10
// The operation is only restricted when the const variable is on the left side.

// 6.	Extract "Night" from:
// "Good Night Everyone" using substring().
// let res = "Good Night Everyone";  
// console.log(res.substring(5,10));  ---> Night


// 7.Using template literals, print:
// Hi Rohith, your balance is 2000
// where name and balance come from variables.

// let name = "Rohith";
// let balance = 2000;
// console.log(`Hi ${name}, your balance is ${balance}`) --->Hi Rohith, your balance is 2000

// 8.Given:
// const name = new String("Rohith");
// What is typeof name and why?

// When you use the syntax new String("Rohith"), you are not creating a simple string primitive. You are explicitly creating a String object (an instance of the built-in String constructor).

// Primitives: A variable created with let name = "Rohith"; results in typeof name being "string". This is the most common and preferred way to handle strings.

// Objects: When you prepend new before a constructor function (like String, Number, or Boolean), JavaScript wraps the value in an object. This object has properties and methods, and its typeof is always "object"


// const name = new Number("Rohith");
// const name = new String("Rohith");
// console.log(typeof name) ---> Object ________________________________________
// 🔥 HARD LEVEL – (10 Questions)
// (Asked in interviews of Amazon, Microsoft, Walmart, Uber, Atlassian – using ONLY string/object basics)
// 1.	Write a program to capitalize the first letter of every word in a sentence.
// Example: "hello coder army" → "Hello Coder Army"


// let str = "hello coder army"
// let result = str
//           .split(" ")
//           .map(word => word[0].toUpperCase() + word.slice(1)) 
//           .join(" ");

//  console.log(result)  ----> Hello Coder Army

// let result = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)) .join(" ");
//  console.log(result)  ----> Hello Coder Army
// ------------------------
// let month = ["jan","feb", "mar", "apr", "may","jun","july"];
// console.log(month.map(val => val.toUpperCase()));
// ----------------------------




// 2. Given a string, remove all duplicate characters.
// "banana" → "ban"

// let str = "Banana";
// let result = [...new Set(str.split(""))].join("");
// console.log(result);
//  Output: Ban
// // 1. Split the string into an array of characters.
// // 2. Create a new Set from the array, which automatically filters out duplicates.
// // 3. Use the spread operator ([...]) to convert the Set back to an array.
// // 4. Join the array back into a single string.

// 2. Find the maximum occurring character in a string.
// "Javascript" → "a"

// If else way to find ans

// let str = "javascripat";

// let count = {};
// let maxChar = "";
// let maxCount = 0;

// for (let key of str) {
//   if (count[key] === undefined) {
//     count[key] = 1;        // first time we see the character
//   } else {
//     count[key]++;          // character already exists, so increase count
//   }

//   if (count[key] > maxCount) {
//     maxCount = count[key];
//     maxChar = key;
//   }
// }

// console.log(maxChar);   a 

// -------------------------------
// Map way to find

// let str = "javascript";

// let map = new Map();
// let maxChar = " ";
// let maxCount = 0;

// for (let kay of str) {
//   // Update count using Map
//   map.set(kay, (map.get(kay) || 0) + 1);
//   // Track the max frequency
//   if (map.get(kay) > maxCount) {
//     maxCount = map.get(kay);
//         maxChar = kay;
//   }
// }
// console.log(maxChar);   --->  a


// I want to find how many times a has occured 

// let ab = "Javascripat";
// let count = "";

// for(let i = 0; i < ab.length; i++){
  
//   if(ab[i] === "a")
//   count++;
// }
// console.log(count);  ---> 3 

// count = 0;
// for(let key of ab){
//   if (key === "a") 
//   count++
// }
// console.log(count)  ---> 3 


// 2.	Check if two strings are anagrams or not.
// "listen" and "silent"
// 3.	Without using .trim(), remove leading & trailing spaces manually.

// let str = "   Hello World!   ";

// // The RegEx pattern to match:
// // 1. ^\s+: Matches one or more space characters (\s) at the beginning of the string (^)
// // 2. |\s+$: OR (|) matches one or more space characters (\s+) at the end of the string ($)
// let result = str.replace(/^\s+|\s+$/g, "");

// console.log(result);
// // Output: "Hello World!"


// 4. Given:
// const obj = { a: 1 };
// let x = obj;
// const y = obj;
// x.a = 50;
// y.a = 200;
// console.log(obj.a);
// Explain the output. 200
// It is like cascading only

// 5.Convert this string into snake case:
// "Today Is A Great Day" → "today_is_a_great_day"
// 6.Reverse only the words, not the whole string.
// "I love JavaScript" → "JavaScript love I"
// console.log("I love JavaScript".split(" ").reverse().join(" ") )
// JavaScript love I
