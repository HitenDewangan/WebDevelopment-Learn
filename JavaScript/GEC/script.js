// Global Execution Context   H O I S T I N G
// Temporal Dead Zone

//Different ways to declare a variable
// let x = 10;
// var y = 20;
// const z = 30;

// console.log(x, y, z)

//=====================================================================

// let a = 10;
// let b = 20;

// function add(a, b) {
//     return a + b;
// }

// console.log(add(a, b))

//===========================================HOISTING=========================

console.log(a)
console.log(b)       // this will get error, as declared with "let" and not with "var"
hello()

var a = 10;
let b = 20;

function hello() {
	console.log("Hello World")
}

