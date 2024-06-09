////////////////////////////////////////////////INPUT/OUTPUT////////////////////////////////////////////////////////////
//=====================console.log=====================
console.log("Anu");
console.log(10);
console.log(true);
console.log(10.5);
console.log(10n);
console.log([1, 2, 3]);
console.log({ name: "Anu" });
console.log(undefined);
console.log(null);
console.log(Symbol());
console.log(new Date());
console.log(new Error());
console.log(new RangeError());
console.log(new ReferenceError());
console.log(new SyntaxError());
console.log(new TypeError());
console.log(new URIError());
console.log(new EvalError());

///////////////////////////////////////////////////////////Data Types/Data Structures///////////////////////////////////////////////////////////
//========================Numbers=======================
let a;
console.log(a);
a = 10;
console.log(a);
a = 20;
console.log(a);

//=======================Array=========================
let apple = [25,"Anu", "Tanu", "IOI", 101]
let IOI = [1, 2, "Student", true];
console.log(apple);
console.log(IOI);

//=====================Object=======================
let student = {
    name: "Anu",
    age: 21,
}
console.log(student);

//=====================Boolean======================
let b = true;
let c = false;
console.log(b);
console.log(c);
//=====================Undefined=====================
let d;
console.log(d);
//=====================Null=====================
let e = null;
console.log(e);
//=====================String=====================
let f = "Anu";
console.log(f);
//=====================Symbol=====================
let g = Symbol();
console.log(g);
//=====================Date=====================
let h = new Date();
console.log(h);
//=====================Error=====================
let i = new Error();
console.log(i);
//=====================RangeError=====================
let j = new RangeError();
console.log(j);
//=====================ReferenceError=====================
let k = new ReferenceError();
console.log(k);
//=====================SyntaxError=====================
let l = new SyntaxError();
console.log(l);
//=====================TypeError=====================
let m = new TypeError();
console.log(m);
//=====================URIError=====================
let n = new URIError();
console.log(n);
//=====================Math=====================
let o = Math.PI;
console.log(o);
//=====================Random=====================
let p = Math.random();
console.log(p);


////////////////////////////////////////////////////////CONDITIONALS////////////////////////////////////////////////////////
//=====================IF ELSE=====================
let q = 10;
if (q >= 10) {
    console.log("Party Tonight");
}
else {
    console.log("Party Later");
}
//=====================Ternary Operator=====================
let rain = true;
rain ? console.log("Raining Outside") : console.log("Not Rainy");

////////////////////////////////////////////////////////Loops////////////////////////////////////////////////////////
//=====================Do-While Loop=====================
let r = 0;
do {
    console.log("Hello World !");
    r++;
} while (r < 10);
//=====================While Loop=====================
let s = 0;
while (s < 10) {
    console.log("I'll be fine");
    s+=3;
}
//=====================For Loop=====================
for (let t = 0; t < 10; t+=2) {
    console.log("I'm not Alone");
}
//=====================For In Loop===================== Object
let u = {
    name: "Anu",
    age: 21
}
for (let key in u) {
    console.log(key, u[key]);
}
//===================For of Loop===================== Array
let v = [1, 2, 3, 4, 5];
for (let w of v) {
    console.log(w);
}

