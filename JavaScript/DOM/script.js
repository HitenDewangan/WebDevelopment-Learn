// by targeting ...   no need to use #, . or []

const var1 = document.getElementById("n1");
const var2 = document.getElementsByClassName("container");
const var3 = document.getElementsByTagName("h3");

console.log(var1);
// var1.innerText = "Hiden";
// var1.textContent = "Danger Zone";
// var1.outerText = "not-hiden";
// console.log(var2)
// console.log(var3)

// QuerySelector and QuerySelectorAll Methods
const x =document.querySelector("#n3");
x.textContent = "World0001";
x.style.backgroundColor = "purple";

const y = document.querySelectorAll(".name");
y[0].style.backgroundColor = "red";         //Hided
y[1].style.backgroundColor = "green";       //nobita
y[2].style.backgroundColor = "yellow";      // world
y[3].style.backgroundColor = "blue";        //how are u ?


// how to insert innerHTML

const list = `
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    `;

const lst = document.querySelector("ol");
lst.innerHTML = list;