"use strict";
const quantityOfBoxes = document.querySelector("#controls>input");
const buttonCreate = document.querySelector("#controls>button");
const buttonDelete = document.querySelector("#controls>button:last-child");
const boxes = document.querySelector("#boxes");
let amount;
function amountBoxes() {
  amount = this.value;
}
function addBoxes() {
  const arrayOfBoxes = [];
  for (let i = 0; i < amount; i++) {
    arrayOfBoxes.push(document.createElement("div"));
  }
  boxes.append(...arrayOfBoxes);
  arrayOfBoxes.forEach((elem, idx) => {
    elem.style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    elem.style.width = `${30 + idx * 10}px`;
    elem.style.height = `${30 + idx * 10}px`;
  });
}
function deleteBoxes() {
  const arrayClean = [...boxes.children];
  boxes.firstChild === null ||
    arrayClean.forEach(() => boxes.firstChild.remove());
}
quantityOfBoxes.addEventListener("click", amountBoxes);
buttonCreate.addEventListener("click", addBoxes);
buttonDelete.addEventListener("click", deleteBoxes);
