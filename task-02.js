"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const parentElement = document.querySelector("#ingredients");
function createElementForIngredients(arr) {
  const domElementsFromIngredients = arr.map(text => {
    const elem = document.createElement("li");
    elem.textContent = text;
    return elem;
  });
  parentElement.append(...domElementsFromIngredients);
}
createElementForIngredients(ingredients);
