//================ Function to return alphabet eg. 1 -> A, 2 -> B, 3 -> C, 4 -> D, 5 -> E, 6 -> F, 7 -> G, 8 -> H, 9 -> I, 10 -> J
function giveAlphabet(n){
    return String.fromCharCode(n+64)
}

let alpha = giveAlphabet(1)
let alpha2 = giveAlphabet(26)
let alpha3 = giveAlphabet(10)

console.log(alpha, alpha2, alpha3)


//=============== Add two numbers using arrow function
let sum = (a, b) => {
    return a + b
}

console.log(sum(1, 2))

//===================== Function to return alphabet eg. 1 -> A, 2 -> B, 3 -> C, 4 -> D, 5 -> E, 6 -> F, 7 -> G, 8 -> H, 9 -> I, 10 -> J using arrow function
let giveAlpha = (n) => {
    return String.fromCharCode(n+64)
}

console.log(giveAlpha(1))

