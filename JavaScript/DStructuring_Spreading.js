//=================== ======================== Destructuring ======================================================

/* when we de-structure the name of a variable, the key/property should be the same */

//                        ==================== =================================== ========================

const names = [["Tom", "Jerry", "Spike", "Sam"], ["Jack", "Jill"]];
const [x, y] = names;
console.log(x, y);

let [...z] = names;
console.log(z);

const lands = ["Switzerland", "Norway", "Finland", "Sweden"];
let [n1, n2, , n4] = lands;
console.log(n1, n2, n4)

//                    ================== ========== destructuring using loop ================ ============================

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i]);
// }

//                        ================== ========== Spreading ================ ============================

// let rect = {
//     width: 10,
//     height: 20,
//     area : 200,
// }

// let { width, height, area } = rect;
// console.log(width, height, area);

//                 =================== ======================== Spread Operator ============================================
const { log } = require("console");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...c] = arr;
console.log(a, b, c);

const arr2 = [1, 3, 5, 9, 11, 13];
let [d, e1, f] = arr2;            // SyntaxError: Rest element must be last element
console.log(d, e1, f);

// destructure and assign the element of constant array to 



//                ===== =================== =========================== Practice Questions ============================= ====================== =====
/*
 - Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
 - Destructure and assign the elements of countries array to fin, est, sw, den, nor
 - Destructure the rectangle object by its properties or keys.
*/

// Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
const constants = [2.71, 3.14, 9.8, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 10,
    height: 20,
    area: 200
}
let { width, height, area } = rectangle;
console.log(width, height, area);