// OPERATORS

// ✅ EASY LEVEL (10 Questions)
// These check your fundamentals + operator understanding.
// 1. What will be the output?
// let x = 5;
// x += 10;
// console.log(x); 
// Ans – 15

// 2. Predict the output
// let a = 10;
// let b = "10";
// console.log(a == b);
// console.log(a === b);
// True , False

// 3. What will this print?
// console.log(null == undefined);
// console.log(null === undefined);
// false , false 

// 4. Output?
// let a = 7;
// let b = 3;
// console.log(a > b && b < 10);
// True True

// 5. Ternary operator
// Write a ternary expression that prints "Adult" if age ≥ 18 else "Minor".
// let age = 14;
// let status = age >= 18 ? "Adult" : "Minor"
// console.log(status)  - Minor

// 6. What is the result?
// let n = 20;
// console.log(!(n > 10));
// false  

// 7. Output?
// console.log(typeof null);
// Object 

// 8. Output?
// let value = "30";
// console.log(value == 30); Ans - true
// why it is true 30 is a string right ? 

// In JS if it is a numberin string, it'll convert it into a number, but it is  not the same with words it will  show NaN 

// 9. Output?
// console.log(NaN == NaN);
// false

//  10. Rewrite using +=
// let total = 50;
// total = total + 25;
//  Ans - total+= 25 
// console.log(total) = 75


// ✅ MEDIUM LEVEL (10 Questions)
// These test understanding of coercion, increments, chaining, and tricky comparisons.
// 1. Predict the output
// let a = 1;
// let b = 2;
// let result = --b - ++a + ++b - --a;
// console.log(result);  ---> 0
// // 1 - 2 + 2 - 1
// // = 0

// 2. What is logged?
// let x = "5";
// let y = 2;
// console.log(x * y); 10
// console.log(x + y); 52


// 3. Output?
// let a = 0;
// console.log(a || 100);    - 100
// console.log(a && 100);  - 0



// let a = 105;
// console.log(a || 100); ---> 105
// console.log(a && 0); ---> 0

// let a = 105;
// console.log(a || 100);  --> 105
// console.log(a && 100);  ---> 100

// The || operator looks for the first truthy value.

// The && operator looks for the first falsy value. If all values are truthy, it returns the last value.

// 4. Evaluate
// console.log(null >= 0);  -True 
// console.log(null > 0);   - False

// console.log(null > 0);   false
// console.log(null < 0);  false
// console.log(null === 0)   false

// if Null is not less than and higher than 0 and equal to zero all three is false then waht is true

// Code,Coercion,Result
// null > 0,0 > 0,false
// null < 0,0 < 0,false
// null >= 0,0 >= 0,true (Because 0 is equal to 0)
// null <= 0,0 <= 0,true (Because 0 is equal to 0)

// when comparing Null with relational operators like <> null becomes 0 that's why 0 is not higher than and less than 0 is True 
// when comparing Null with equal operators like = 

// Strict Equality (===)
// console.log(null === 0); // false

// The strict equality operator (===) checks both value and type. Since null is of type object (historically) and 0 is of type number, they are of different types, so this is always false.

// Loose Equality (==)
// console.log(null == 0); // false

// This is the most confusing part. While null coerces to 0 for relational operators, the loose equality (==) has a specific, hard-coded rule: null is only loosely equal to undefined. It is not equal to 0 or any other number.

// typeof undefined - 'undefined'
// typeof null - 'object'
// null == undefined - true
// null === undefined - false

// 5. Output?
// console.log(undefined == 0);  false
// console.log(undefined === 0); false
// console.log(undefined >= 0);  false
// console.log(undefined < 0);   false 
// console.log(undefined > 0);   false


// 6. Solve
// let a = 10;
// let b = "20";
// let c = a == b == false;
// console.log(c);
// Ans  ---> true

// 7. Output
// console.log("5" - 1);  4
// console.log("5" + 1);  51
// console.log("5" * "2"); 10
// console.log("5" / 2); 2.5

// 8. Output?
// let x = 3;
// console.log(x++ + ++x + x--);  ---> 13
// 3 + 5 + 5 = 13
// 4 + 5 + 
// ----------------------
// x = 11;
// console.log(x--) --> 11 bcoz after minus stays the same value 
// ----------------------
// let y = 10;
// console.log(y++ + (y * 2) + --y + y + "1");
// 10 + 22 + 10 + 10+ "1"
// 11 + 22 + 10 + 
// so here what we need to note mainly is (y*2) is last y value is 11, so 100 * 2 = 22
// after that --y is we should not take bracket value 22 to substitute with --y as 21 we should take 11 as last value and  sub with y so 10 
// -----------------
// 9. Ternary
// Rewrite this as a ternary:
// if(score > 40){
//     status = "Passed"
// } else {
//     status = "Failed"
// // }
// let score;
// let grade = score > 40 ? "Passed" : "failed";  

// console.log(grade); ---> failed
// I didn't define score with anything as 10 or 20,
// it should show undefined right ? why it shows failed?

// You are correct that you did not define score with a value, so when the line let score; runs,
// the variable score is initialized to undefined.

// However, the final output is failed, not undefined, because of how JavaScript handles the 
// comparison (>) between undefined and a number (40).

// That is a very insightful question about how JavaScript handles uninitialized variables during comparisons!

// 🧐 Why the Output is "failed"
// When JavaScript evaluates the conditional expression, it follows these steps:


// 1. Coercion of undefined
// When you use a relational operator (>, <, >=, <=) to compare a variable to a number, JavaScript attempts to convert the non-numeric value into a number.

// When undefined is converted to a number, it becomes the special value NaN (Not a Number).

// 2. Comparison with NaN
// The expression effectively becomes: NaN > 40 failed 0 --> false --> failed
// It's worth noting that if you had initialized score to null, the result would also be "failed", but for a different reason:

// let score = null; // Coerced to 0
// let grade = score > 40 ? "Passed" : "failed";

// // 0 > 40 is false, so the output is "failed"


// 10. Logical Operator Question

// let age = 20;
// let hasID = false;

// if(age >= 18 && hasID){
//     console.log("Allow Entry")
// } else {
//     console.log("Reject")
// }
// //What prints? Why?
// Reject because && both condition should met to get true, here 1st one is false as 20 is not equal to 18 
// hasID's value itself is false only, so here true. so false true is false thats why, else is printed. 
// ________________________________________
// ✅ HARD LEVEL (10 Questions)
// These simulate real product-company logic traps + operator puzzles.
// 1. Predict the output carefully
// let i = 23;
// let j = 67;
// let k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log(k);  -88 

// 23 - 22 + 66 - 67 + 22 - 67 + 23 - 66  = -88

// 22 - 23 + 66 - 67 + 22 - 66 + 23 - 66 

// 2. Operator Precedence Challenge
// let x = 4;
// let y = 8;
// let z = x++ * --y + ++x / y-- + x;
// console.log(z) - 34.85
// 4 * 7 + 6 / 7 + 6 = 34.85
// 5 * 7 +6 /7 + 4 =
// let a = 5;
// let b = 1;

// let result = ++a * "2" - b-- || (a + b);

// console.log(result); = 11

// 6 * 2 - 1 = 11 
// 6 * 2 - 0 =          , a+b = 6(a) + 0(b) = 6 

// Evaluation of the || Operator
// The expression is now: 11 || (a + b)

// The || (OR) operator looks for the first truthy value.

// The left side is 11, which is a truthy value.

// JavaScript immediately short-circuits and returns the value 11
// without evaluating the right side ((a + b)).
// -----

// 3. Trick with == and ===
// console.log([] == []);  
// console.log([] == ![]);

// console.log([] == []);   ---> false  
// console.log([] === []);  ---> false
// we may think empty array and empty array is true right ? but JS logic is best, here 2 empty boxes are not equal
// why because it compares the reference IDNo. not the value only value can be empty
// if Localdisk D and Localdisk E is empty does that mean they are same, no right, both has different address path

// console.log([] == ![]);   //---> true 
// console.log([] === ![]);  --false 

// console.log([] == ![]);   //---> true 
// so here empty array => string "" => empty string it to 0 and ![] => falsy => 0
// so 0 == 0 = true, ans is True.

// console.log([] === ![]);  --- false 
// triple equal is a strict operator, it checks the type as well as value
// here it compares the logic []---> array and ![]---> it is boolean
// since array can not be equal to boolean it is False


// 4. Deep coercion
// console.log(null == 0);  - false 
// console.log(null <= 0);  - true
// console.log(null >= 0);  - true


// 5. Shadow question
// let a = "10";
// let b = a++ + ++a + a;
// console.log(b); - 34
// 10 + 12 + 12 = 34 
// 11 + 12 + 12
// why it isn't 22a ?  why means first JS converts the string of "10" into the number 10 
// at last a value is previously converted to 12 by operation it is 12 so added 

// 6. Nested ternary
// What is the output?
// let marks = 72;
// let grade = marks > 90 ? "A" : 
//             marks > 75 ? "B" :
//             marks > 60 ? "C" : "D";
// console.log(grade); C  as 72 is higher than 60

// 7. AND / OR short-circuit

// console.log(0 && 5); 0
// console.log(5 && 0); 0
// console.log(0 || 5); 5
// console.log(5 || 0); 5

// && AND always look for first falsy value and returns the value as ans never checks another value
// || OR  always look for first truthy value and returns the value as ans never checks another value

// 1. console.log(" " && !1); The output is false 
// because the string with a space (" ") is truthy, forcing the && operator to evaluate the second operand,
// which is strictly false.

// "" --> this is empty string " " --> this is nonempty string and non empty string is truthy 
// and 1 is truthy here !1 is false so truthy + false = false

// 2.console.log(" " && !0); ---> true

// here since " " is truthy and 0 is false so not equal to 0 is !0 is truthy 
// true + true = true

// 8. Pre/Post with booleans
// let x = true; 
// let y = x++ + ++x;
// console.log(y);

// let x = true;
// let y = x++ + ++x;
// console.log(y);   ---> 4 
// 1+ 3  2 + 3 
// 9. Complex coercion

// console.log("10" > "2"); false
// console.log("2" > 10); false
// console.log("2" < 10); true 

// console.log("10" - "2");  8  
// console.log("2" - 10);  -8 
// console.log("2" - 10);  -8

// console.log("10" + "2");  102
// console.log("2" + 10); 210
// console.log("2" + 10); 210
 
// console.log("10" > "2"); false     how and why ? 
// The Rule (String vs. String): When comparing two strings using a relational operator (>, <), JavaScript compares the characters from left to right
// based on their Unicode value (which corresponds to alphabetical order).
// It checks the first character of each string: "1" vs. "2".Since the character "1" comes before "2" (or has a lower Unicode value),
// the expression "10" is not greater than "2"   "10" > "2" is false


// console.log("2" > 10); false
// because the comparison involves a string and a number, which triggers type coercion to numbers.

// The Rule (String vs. Number):
// When comparing a string and a number using a relational operator, JavaScript converts the string into a number first.

// The string "2" is coerced into the number 2.
// The comparison becomes: 2 > 10.

// console.log("2" < 10); true  --> if you had understood last sum it is OK.


// 10. Real-world operator logic
// A payment is successful only if:
// •	amount > 0
// •	status === "success"
// Write this using && and ternary
// → return "Payment Done" OR "Payment Failed"

// I wrote this one, ignored status, took safe awy, afraid will get error, I should never take safe way it's ko even if it runs into error
// let amount = 100
// let status = amount > 0 && amount > 0  ? "Payment Done" : "Payment Failed";
// console.log(status)  ---->  Payment Done

// This is optimised way 
// let amount = 100
// let status = "success";

// let payment = (amount > 0 && status === "success")  ? "Payment Done" : "Payment Failed";
// console.log(payment) ---->  Payment Done
