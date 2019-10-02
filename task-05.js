"use strict";
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
let word = "";
const wrightText = ({ data }) => {
  data !== null && word === "незнакомец" && (word = "");
  data !== null ? (word += data) : (word = word.slice(0, word.length - 1));
  word === "" && (word = "незнакомец");
  outputName.textContent = word;
};
inputName.addEventListener("input", wrightText);
