"use strict";
let counterValue = 0;
const countView = document.querySelector("#value");
const counter = document.querySelector("#counter");
const increment = () => {
  counterValue += 1;
  countView.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  countView.textContent = counterValue;
};
counter.firstElementChild.addEventListener("click", decrement);
counter.lastElementChild.addEventListener("click", increment);
