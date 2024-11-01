Password = prompt("WHAT IS YOU PASSWORD");
while (Password != "Diddy Party") {
  Password = prompt("!! WRONG PASSWORD PLEASE TRY AGAIN !!");
}

let arr = [];
box1 = document.getElementById("box");
function render(a) {
  box1.innerHTML = "";
  a.forEach(function (item) {
    let createElement = document.createElement("p");
    createElement.className =
      "w-[50%] p-5 bg-fuchsia-300 m-auto bg-blue-800 text-white text-[1.5vw] text-center mb-2 ";
    createElement.innerHTML = item;
    box1.appendChild(createElement);
  });
}

function additem() {
  let newitem = prompt("Adding To-do...");
  arr.push(newitem);
  render(arr);
}
function deleteitem() {
  arr.pop();
  render(arr);
}

function sorted() {
  arr.sort();
  render(arr);
}

function reversed() {
  arr.sort();
  arr.reverse();
  render(arr);
}

function words() {
  newword = arr.filter((word) => word.length > 6);
  render(newword);
}

function Lightmode() {
  document.body.className = "pt-10 bg-purple-100 transition";
}

function Darkmode() {
  document.body.className = "pt-10 bg-purple-700 transition";
}
