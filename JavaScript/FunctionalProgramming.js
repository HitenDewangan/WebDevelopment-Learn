//=============================Functional Programming==============================
/*
Intead of writing regular loop, latest version of JS introduced lot of bulit-in methods which can help us to solve complicated problems. All built-in method takes callback function as an argument.
eg : foreach, map, filter, reduce, find, every, some, sort
*/

const num = [11, 12, 13, 14, 15];

//map                      ===================================================

const square = num.map((n) => n ** 2);

console.log(square)

//filter                   ===================================================

const even = num.filter((n) => n % 2 === 0);

console.log(even)

//reduce                   ===================================================

const sum = num.reduce((acc, n) => acc + n, 12);

console.log(sum)

//for each                 =================================================== only for array

const squares = num.forEach((n) => console.log(n ** 2));

console.log(squares)

//find last element in array ===================================================

// const lastEven = num.findLast((n) => n % 2 === 0);

// console.log(lastEven)

// //find index  of first even number in array ===================================

// const firstEvenIndex = num.findIndex((n) => n % 2 === 0);

// console.log(firstEvenIndex)


// //find first even number in array =============================================

// const firstEven = num.find((n) => n % 2 === 0);

// console.log(firstEven)

// //some function to check if any number is even in array =======================

// const anyEven = num.some((n) => n % 2 === 0);

// console.log(anyEven)

// //every function to check if all number are even in array =======================

// const allEven = num.every((n) => n % 2 === 0);

// console.log(allEven)

//sort function ================================================================

const sorted = num.sort((a, b) => b - a);

console.log(sorted)

//=============================Functional Programming==============================

//filter
const lands = ["Switzerland", "Norway", "Finland", "Sweden"];

const filtered = lands.filter((land) => land.includes("land"));
const _land = lands.filter((land) => land.endsWith("land"));

console.log(filtered)
console.log(_land)

//sort
const friends = ["Tom", "Harry", "Peter", "Catey"];

const sortedFriends = friends.sort((a, b) => a.concat(b));
console.log(sortedFriends)

sortedFriends.sort((a, b) => a.localeCompare(b));
console.log(sortedFriends)

console.log(friends.sort())