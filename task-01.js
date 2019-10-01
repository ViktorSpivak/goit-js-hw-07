"use strict";
const selectedElement = document.querySelector("#categories");
const countUlCategories = selectedElement.querySelectorAll(".item");
console.log(`В списке ${countUlCategories.length} категории.`);
countUlCategories.forEach(text =>
  console.log(
    `Категория ${text.firstElementChild.textContent} Количество ${text.lastElementChild.children.length} `
  )
);
