//javascript event

const changeText = () => {
  const texts = (document.querySelector(".text").innerHTML =
    "Hello Javascript");
};

const changeTextValue = () => {
  const text = document.querySelector(".textValue").value;
  document.querySelector(".textContainer").innerHTML = text;
};

// javascript Data Type

// Numbers:
let num1 = 16;
let num2 = 7.5;
console.log(num1, num2);

// Strings:
let str1 = "Iqbal";
let str2 = "Hossain";
console.log(str1 + " " + str2);

// Object:
const person = {
  firstName: "Iqbal",
  lastName: "Hossain",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.firstName);
console.log(person.fullName());

// Array:
const colors = ["yellow", "Red", "Black"];

colors.push("White");
colors.push("Aqua");
colors.pop();
colors.unshift("Blue");
colors.unshift("Violet");
colors.shift();
console.log(colors[0]);
console.log(colors);

// Booleans
let blan1 = true;
let blan2 = false;
console.log(blan1, blan2);

//Javascript Loops

// for Loop
const arra = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; arra.length > i; i++) {
  console.log(arra[i]);
}

// for in Loop

let objs = {
  name: "Iqbal",
  age: "21",
  house: "Narsingdi",
  nationality: "Bangladeshi",
};

for (let obj in objs) {
  console.log(objs[obj]);
}

// for Of loop
let arrayTwo = [50, 60, 70, 80, 90, 100];
for (let arr of arrayTwo) {
  console.log(arr);
}

// for While loop

let array = 0;
while (arra.length > array) {
  console.log(arra[array]);
  array++;
}

// debugger

const numberArray = [40, 10, 20, 30, 60];
let numberContain;
for (let i = 0; numberArray.length > i; i++) {
  debugger;
  numberContain = numberArray[i] * 2;
  console.log(numberContain);
}

// Ajax

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".dataContainer").innerHTML = `
    <ul>
    ${data.map((item) => "<li>" + item.name + "</li>")}
    </ul>
    `;
    });
}

// javascript Promise

let myPromise = new Promise((resolveFunc, rejectFunc) => {
  let result = 5;
  if (result == 2) {
    resolveFunc("Success");
  } else {
    rejectFunc("Failed");
  }
});
// myPromise.then((msg) => console.log(`${msg}`));

// myPromise.catch((err) => console.log(`${err}`));

myPromise.then((msg) => console.log(msg)).catch((error) => console.log(error));

// Dom Manipolution

// const link = document.querySelector(".links");
// link.textContent = "Amazone";
// link.href = "https://www.amazon.com/";

// const sect = document.querySelector(".domBox");
// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride.";
// sect.appendChild(para);

// const text = document.createTextNode("Hello DOM Manipulation");

// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// sect.appendChild(linkPara);

// //remove

// // sect.removeChild(linkPara);

// // linkPara.remove();

// // linkPara.parentNode.removeChild(linkPara);

// // style all components

// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// para.setAttribute("class", "highlight");

// ES6 Features

// let
let arrr = [10, 40, 50, 70, 10];
let numb = 10;

for (let i = 0; arrr.length > i; i++) {
  numb += arrr[i];
  console.log(numb);
}

// const

const color = ["yellow", "Red", "Black"];

// color = ["white", "green", "blue"]; // ERROR

const totalP = 100; //allowed
console.log(totalP);

// Arrow Function

const arrowFunc = (arr) => {
  let numb = 1;
  for (let i = 0; arr.length > i; i++) {
    numb *= arr[i];
  }
  return numb;
};

console.log(arrowFunc(arrr));

// Arrow Methods

const colorsAll = ["yellow", "Red", "Black"];

colorsAll.length;
colorsAll.toString();
colorsAll.join(" + ");
colorsAll.push("White");
colorsAll.push("Aqua");
colorsAll.pop();
colorsAll.unshift("Blue");
colorsAll.unshift("Violet");
colorsAll.shift();
delete colorsAll[0];
colorsAll.concat(["White", "Yellow"]);
colorsAll.splice(2, 0, "White", "Orrange");
colorsAll.slice(-1);
