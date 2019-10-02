"use strict";
const inputElement = document.querySelector("#validation-input");
let word = "";
const inputFunction = ({ data }) =>
  data !== null ? (word += data) : (word = word.slice(0, word.length - 1));
const validationFunction = () => {
  word.length === Number(inputElement.dataset.length)
    ? inputElement.classList.add("valid")
    : inputElement.classList.add("invalid");
};
const validationWaiting = () =>
  inputElement.classList.remove("valid", "invalid");
inputElement.addEventListener("input", inputFunction);
inputElement.addEventListener("focus", validationWaiting);
inputElement.addEventListener("blur", validationFunction);
