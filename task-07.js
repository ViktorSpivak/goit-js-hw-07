"use strict";
const inputSize = document.querySelector("#font-size-slider");
const stringForChange = document.querySelector("#text");
function changeFont() {
  stringForChange.setAttribute("style", `font-size:${this.value}px`);
}
inputSize.addEventListener("change", changeFont);
