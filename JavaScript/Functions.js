//////////////////////////////////FUNCTIONS////////////////////////////////////

//=================function declaration===================
function add(a, b) {
    return a + b;
}
//=================function expression===================
let sub = function (a, b) {
    return a - b                  
}
//=================arrow function===================
let multiply = (a, b) => a * b
//==================function call===================
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));

//===================Higher Order Function===================
let sum = (a, b) => a + b;
let sub1 = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
let mod = (a, b) => a % b;
let exp = (a, b) => a ** b;
let min = (a, b) => Math.min(a, b);
let max = (a, b) => Math.max(a, b);
let rand = (a, b) => Math.random() * (b - a) + a;
let abs = (a) => Math.abs(a);
let sqrt = (a) => Math.sqrt(a);
let cbrt = (a) => Math.cbrt(a);
let ceil = (a) => Math.ceil(a);
let floor = (a) => Math.floor(a);
let round = (a) => Math.round(a);
let trunc = (a) => Math.trunc(a);
let sin = (a) => Math.sin(a);
let cos = (a) => Math.cos(a);
let tan = (a) => Math.tan(a);
let asin = (a) => Math.asin(a);
let acos = (a) => Math.acos(a);
let atan = (a) => Math.atan(a);
let atan2 = (a, b) => Math.atan2(a, b);
let expm1 = (a) => Math.expm1(a);
let log1p = (a) => Math.log1p(a);
let hypot = (a, b) => Math.hypot(a, b);
let clz32 = (a) => Math.clz32(a);
let sign = (a) => Math.sign(a);
let fround = (a) => Math.fround(a);
let random = (a) => Math.random(a);
let log2 = (a) => Math.log2(a);
let log10 = (a) => Math.log10(a);
let log = (a) => Math.log(a);
let pow = (a, b) => Math.pow(a, b);
//=============================Function Call for above==============================
// console.log(sum(1, 2));
// console.log(sub1(1, 2));
// console.log(mul(1, 2));
console.log(div(1, 2));
console.log(mod(127, 5));
console.log(exp(3, 2));
console.log(min(1,2,3,4,5,6,7));
console.log(max(1,2,3,4,5,6,7));
console.log(rand(1, 2));
console.log(abs(-1));
console.log(sqrt(144));
console.log(cbrt(27));
console.log(ceil(1.4564));
console.log(floor(1.4356));
console.log(round(1.93436));
console.log(trunc(1.93436));
console.log(sin(1));         //in radian value not in degree value...for radian value use Math.sin(1) for degree value use Math.sin(Math.PI/2)
console.log(cos(1));
console.log(tan(1));
console.log(asin(1));        
console.log(acos(1));
console.log(atan(1));
console.log(atan2(1, 2));
console.log(expm1(1.5));     
console.log(log1p(1));
console.log(hypot(1, 2));
console.log(clz32(1));
console.log(sign(1));
console.log(fround(1));
console.log(rand(1,100));
console.log(log2(6));
console.log(log10(1000));
console.log(log(1));
console.log(pow(5, 2));
console.log(Math.sin(3*Math.PI/2));    //





