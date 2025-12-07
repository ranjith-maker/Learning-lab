                    //ARRAY REVISION
// // 1. Using at(), return the first and last element of:
// [10, 20, 30, 40, 50]
// console.log(ab.at(0), ab.at(4))   ---> 10 50

// 2. Count elements without using .length:
// ["js", "html", "css", "react"]
// let count = 0;
// for(let i =0; i<ab.length; i++){
//     count++;
// }
//  console.log(count);   ---> 4

// let ab = ["js", "html", "css", "react"];
// let count = 0;
// ab.forEach(() => {
//     count++; 
// });
// console.log(count); --> 4

// let ab = ["js", "html", "css", "react"];
// let count = [...ab].length;

// console.log(count);  4
// 3. Add two values at start and end of:
// [5, 10, 15]
// Add "start" at beginning, "end" at last.

// let ab = [5, 10, 15]
// ab.unshift(1,2);
// ab.push(3,4);
// console.log(ab) -  [ 1, 2, 5, 10, 15, 3, 4 ]

// 4. Remove the first 2 elements using shift():
// ["a", "b", "c", "d", "e"]
// ab.shift(); ab.shift();
// console.log(ab); - [ 'c', 'd', 'e' ]

// let ab = ["a", "b", "c", "d", "e"];
// ab.splice(0, 2); 
// console.log(ab);   ---> [ 'c', 'd', 'e' ]

// 5. Replace index 3 with "updated":
// ["red", "blue", "green", "orange", "pink"];

// let ab = ["red", "blue", "green", "orange", "pink"];

// ab.replace("orange" , "upadted");
// console.log(ab) this will throw error, because we used replace with array, whereas it'll only work with string

// ab[3]="updated";
// console.log(ab) ---> [ 'red', 'blue', 'green', 'updated', 'pink' ]

// 6. Check if 35 exists using indexOf():
// [11, 22, 33, 44, 35, 99]
// let ab = [11, 22, 33, 44, 35, 99];
// console.log(ab.indexOf(35));  ---> 4

// 7. Make a deep copy using structuredClone() and show they differ:
// let ab = [100, 200, 300, 400];
// let abc = structuredClone(ab);
// console.log(abc)   ---> [ 100, 200, 300, 400 ]
// abc.push(10);
// console.log(abc) --->  [ 100, 200, 300, 400, 10 ]
// ab.push(20)
// console.log(ab) --->   [ 100, 200, 300, 400, 20 ]

// 8. Convert array into string using join("-"):
// let ab = ["JS", "is", "super", "fun"];
// console.log(ab.toString(" "));  --> JS,is,super,fun
// console.log(ab.join("-")); --> JS-is-super-fun

// 9. Merge arrays using concat -
// let ab = [1, 2, 3] 
// let cb = [4, 5, 6]
// let merge = ab.concat(cb);
// console.log(merge)  ---> [ 1, 2, 3, 4, 5, 6 ]

// 10. Print the middle element of this 2D array:
// let ab = [[10, 20], [30, 40], [50, 60]];
// let merge = ab[1];
// console.log(merge);  --> [ 30, 40 ]

// 🟧 10 MEDIUM LEVEL (with actual values)
// 11. Reverse the array (without .reverse()):
// [9, 8, 7, 6, 5]
// 12. Find the second largest:  -- DSA
// [10, 45, 32, 67, 89, 50]
// 13. Remove duplicates:
// [2, 4, 2, 5, 7, 5, 9, 9]
// 14. Remove elements from index 2–5 using splice:
// [100, 200, 300, 400, 500, 600, 700, 800]
// 15. Insert 100 at index 4 (no deletion):
// [10, 20, 30, 40, 50, 60]

// 16. Convert 2D → 1D using .flat():
// [[1, 2], [3, 4], [5, 6]]
// 17. Sort ASC & DESC:
// [11, 55, 3, 99, 42, 10]
// 18. Merge 3 arrays:
// [1,2], [3,4], [5,6]
// 19. Count even numbers:
// [2, 7, 12, 9, 18, 23, 30]
// 20. Access the deep value in 3D array:
// [[1, 2, [100, 200]], [3, 4], [5, 6]]
// Extract: 200
// ________________________________________

// 🟧 10 MEDIUM LEVEL (with actual values)
// 11. Reverse the array (without .reverse()):
// let ab = [9, 8, 7, 6, 5];
// let result = ab.reverse();
// console.log(result) ---> [ 5, 6, 7, 8, 9 ]
// Only with Array reverse will work directly for string we use split reverse join to reverse the String value.

// let ab = [9, 8, 7, 6, 5];
// let result = ab.reduce((acc, val)=> {
//    return val + acc;
// }, "")
// console.log(result);   -  56789

// 13. Remove duplicates:
// let ab = [2, 4, 2, 5, 7, 5, 9, 9]
// let result = new Set(ab); 
// console.log(result) ---> Set(5) { 2, 4, 5, 7, 9 }
// 14. Remove elements from index 2–5 using splice:
// let ab = [100, 200, 300, 400, 500, 600, 700, 800]
// ab.splice(2,5)
// console.log(ab) ---> [ 100, 200, 800 ]
// array.splice(startIndex, deleteCount)

// Remove 2 elements starting at index 1, and insert "A" and "B"
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, "A", "B");
// console.log(arr); -----> [1, "A", "B", 4]
// it's worth noting that splice() can also replace elements by adding a third argument (and subsequent arguments):
// arr.splice(1, 2, "A", "B"); - here 1st we wanna delete till 2 
// nums 1 itself and next one, 1 is start from 1, st index, 2 is
// total nums.  

// 15. Insert 100 at index 4 (no deletion):
// let arr = [10, 20, 30, 40, 50, 60];
// arr.splice(4,0,100)
// console.log(arr); [10, 20, 30, 40, 100, 50, 60]
// array.splice(startIndex, deleteCount, item1, item2, ...)

// 16. Convert 2D → 1D using .flat():
// let arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr.flat()) ---> [ 1, 2, 3, 4, 5, 6 ]




// 17. Sort ASC & DESC:
// let arr = [11, 55, 3, 99, 42, 10]
// let sos = arr.sort(function (a,b){
//     return b - a
// })
// console.log(arr) [ 3, 10, 11, 42, 55, 99 ]
// return b - a     [ 99, 55, 42, 11, 10, 3 ]

// 18. Merge 3 arrays:
// [1,2], [3,4], [5,6]
// let arr = [[1,2], [3,4], [5,6]];
// console.log(arr.flat())  [ 1, 2, 3, 4, 5, 6 ]

// 19. Count even numbers:
// let arr = [2, 7, 12, 9, 18, 23, 30]
// let count = "";
// for(let i = 0; i<arr.length; i++ ){
//     if( i%2 ===0  )
//     count++
// }
// console.log(count)  ---> 4

// 20. Access the deep value in 3D array:
// let arr = [[1, 2, [100, 200]], [3, 4], [5, 6]];
// //Extract: 200
// console.log(arr[0][2][1]);  - 200.




// 🔥 10 HARD LEVEL (with actual values)
// 21. Count the frequency of numbers using Map:
// [1, 2, 1, 3, 2, 1, 4, 4]
// 22. Group words by length using Map:
// ["hi", "cat", "go", "sun", "a", "sky"]
// 23. Rotate array right by 2:
// [10, 20, 30, 40, 50]
// 24. Find longest increasing sequence:
// [5, 6, 7, 1, 2, 3, 4, 0, 10, 11]
// 25. Remove all falsy values:
// [0, 1, false, 2, "", 3, null, "js", undefined, NaN]
// 26. Flatten 2D → 1D without .flat():
// [[1, 2, 3], [4, 5], [6, 7, 8]]
// 27. Return array where each item = product of all other items:
// [1, 2, 3, 4]
// Output should be:
// [24, 12, 8, 6]
// 28. Separate mixed array into 3 arrays:
// [10, "JS", true, 5, false, "code", 9]
// → numbers, strings, booleans
// 29. Remove duplicates from a sorted array (use splice):
// [1,1,2,2,2,3,4,4,5]
// 30. Max occurring character using Map:
// "mississippi"
// ________________________________________
// 21. Count the frequency of numbers using Map:
// let arr = [1, 2, 1, 3,4, 2, 1, 3,4];

// let map = new Map();
// for(let num of arr){

//     map.set(num,   (map.get(num)  || 0)+1)
// }
// console.log(map) ---> Map(4) { 1 => 3, 2 => 2, 3 => 2, 4 => 2 }

// 25. Remove all falsy values: 
// let arr = [0, 1, false, 2, "", 3, null, "js", undefined, NaN];

// // The Boolean constructor acts as a function that converts the value
// // to true or false. Only 'true' values are kept by filter().
// let result = arr.filter(Boolean);

// console.log(result);  ---> [ 1, 2, 3, 'js' ]


// 28. Separate mixed array into 3 arrays:
// [10, "JS", true, 5, false, "code", 9]
// → numbers, strings, booleans
// let arr = [10, "JS", true, 5, false, "code", 9];

// const numbers = arr.filter(item => typeof item === 'number');
// const strings = arr.filter(item => typeof item === 'string');
// const booleans = arr.filter(item => typeof item === 'boolean');

// console.log("Numbers:", numbers);   Numbers: [ 10, 5, 9 ]
// console.log("Strings:", strings);   Strings: [ 'JS', 'code' 
// console.log("Booleans:", booleans);  Booleans: [ true, false ]


// 29. Remove duplicates from a sorted array (use splice):
// [1,1,2,2,2,3,4,4,5]
// //29. Remove duplicates from a sorted array (use splice):
// let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];

// // Iterate backward, starting from the second-to-last element (i=7)
// for (let i = arr.length - 1; i >= 1; i--) {
//     // Check if the current element (arr[i]) is equal to the element before it (arr[i - 1])
//     if (arr[i] === arr[i - 1]) {
//         // If they are duplicates, remove the current element (arr[i])
//         // splice(startIndex, deleteCount)
//         arr.splice(i, 1);
//     }
// }
// console.log(arr); 

// I will follow below method only  when we 're removing duplicate
// let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
// // 1. Create a Set from the array (removes duplicates)
// // 2. Use the Spread Operator (...) to convert the Set back into an array
// let are= [...new Set(arr)]; 
// console.log(are); -  [ 1, 2, 3, 4, 5 ]

