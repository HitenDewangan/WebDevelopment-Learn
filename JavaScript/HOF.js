//=========================================== h o f ==============================
const callback = (n) => { 
    return n ** 2;
}

function cube(callback,n) {
    return callback(n) * 2;
}

console.log(cube(callback, 5));

//========================================== SetInterval ================================ Time duration after which function will be called again and again
function greet() {
    console.log("Hello World");
}

setInterval(greet, 1000);      //greet is a callback here. "passed as parameter"  ... this line also called as HOF

setInterval(() => {
    console.log("Hello World from Interval");
}, 1000);

//========================================== SetTimeout ================================ Time after which function will be called

setTimeout(() => {
    console.log("Hello World from Timeout");
}, 10000 );


