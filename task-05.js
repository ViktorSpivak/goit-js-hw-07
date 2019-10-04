"use strict";
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// let word = "";
// const wrightText = ({ data }) => {
//   data !== null && word === "незнакомец" && (word = "");
//   data !== null ? (word += data) : (word = word.slice(0, word.length - 1));
//   word === "" && (word = "незнакомец");
//   outputName.textContent = word;
// };
// inputName.addEventListener("input", wrightText);

const state = {
  defaultValue: "незнакомец",
  message: ""
};

const repaint = (elem, num) => {
  elem.textContent = num;
};

const setName = name => {
  state.message = name || state.defaultValue;
};

inputName.addEventListener("input", () => {
  setName(inputName.value);
  console.log(outputName, state.message);

  repaint(outputName, state.message);
});

// setName();
// repaint(output, state.message);
