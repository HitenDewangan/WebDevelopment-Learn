// write  an object containing self details

let person = {
    name: "H",
    age: 19,
    address: "Chhattisgarh",
    mobno: 1234567890,
    secMarks : 92,
    highSecMarks : 90,
    collegeName : "PW IOI",

    getcollege : function(){        // this is a method
        return `${this.name} is from ${this.collegeName}`       //this.collegeName
    }

}

console.log(person.getcollege())