//=================================stringMethods.js============================================================
// string is a collection of characters
console.log("===================String Methods=====================");
let name = "Anurag";
console.log(name.substr(1,5));    // substr() takes start index and number of characters to be printed
console.log(name.substring(1,5));  // substring() takes start index and end index
console.log(name.slice(1,5));
console.log(name.split(""));
console.log(name.repeat(3))

//==================================arrayMethods.js===============================
// array is a collection of different data types in a single variable
console.log("===================Array Methods=====================");
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(5));
console.log(arr.includes(5, 3));
console.log(arr.join(" "));
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.push(7));
console.log(arr.pop());
console.log(arr.unshift(0));
console.log(arr.shift());
console.log(arr.splice(1, 3));

//================array constructor=================
console.log("==================Array Constructor======================");
let arr1 = new Array(1, 2, 3, 4, 5, 6);
console.log(arr1);

let arr2 = "Javascript";
console.log(arr2);
console.log(arr2.split(""));