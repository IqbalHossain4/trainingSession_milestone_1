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
