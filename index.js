//JS EXERCISES

//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John";
let y = "Doe";
let z = "<>";

console.log(x, z, y);

//22) Create an object with properties such name, surname, email

const user = {
  name: "Liam",
  surname: "Neeson",
  email: "liam@neeson.com",
};

//23) Delete Email from the previously created object

delete user.email;

console.log(user);

//24) Create an array with 10 strings in it

const motorcycles = [
  "Harley",
  "KTM",
  "BMW",
  "Yamaha",
  "Suzuki",
  "Kawasaki",
  "Honda",
  "Ducati",
  "Aprilia",
  "Victory ",
];

//25) Print in the console every string in the previous array

console.log(motorcycles);

//26) Create an array with 100 random numbers in it

let myArray = [];
let arrayMax = 100;
let limit = arrayMax + 1;
for (let i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random() * limit));
}
console.log(myArray);

//27) Wrote a function to get the MAX and the MIN from the previously created array

let max = myArray.reduce(function (x, y) {
  return x > y ? x : y;
});
let min = myArray.reduce(function (x, y) {
  return x < y ? x : y;
});
console.log("Max: " + max);
console.log("Min: " + min);

//28) Create an array of arrays, in which every array has 10 random numbers
//29) Create a function that gets 2 arrays and returns the longest one
//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

//DOM

//31) Get element with ID "container" from the page

document.getElementById("myTable");

//32) Get every "td" from the page

document.getElementsByTagName("td");

//33) Create a cycle that prints the text inside every td of the page

//34) Write a function to change the heading of the page
const changeTitle = function (newTitle) {
  document.getElementsByTagName("h1")[0].innerText = newTitle;
};
changeTitle("Text has been changed");

//35) Write a function to add an extra row to the table
function myFunction() {
  let table = document.getElementById("myTable");
  let row = table.insertRow(6);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = "New Number";
  cell2.innerHTML = "New Model";
  cell3.innerHTML = "New Picture";
  cell4.innerHTML = "New Description";
  cell5.innerHTML = "New Link";
}

//36) Write a function to add the class "test" to each row in the table
//37) Write a function to add a red background to every link in the page

const changeLinkBackgroundColor = function () {
  let tasks = document.querySelectorAll("a");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.backgroundColor = "red";
  }
};

//38) Console log "Page loaded" when the page is correctly loaded

window.onload = function () {
  alert("Page is loaded");
};

//39) Write a function to add new items to a UL
//40) Write a function to empty a list
