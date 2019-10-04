"use strict";
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
const gallery = document.querySelector("#gallery");
gallery.setAttribute("style", "display:flex;padding:0");
function createGallery(arr) {
  let domElement = "";
  arr.forEach(() => (domElement += `<li><image>`));
  gallery.insertAdjacentHTML("afterbegin", domElement);
  const childrenGallery = [...gallery.children];
  childrenGallery.forEach((element, ind) => {
    element.setAttribute("style", "list-style: none");
    element.firstChild.setAttribute("src", arr[ind].url);
    element.firstChild.setAttribute("alt", arr[ind].alt);
    element.firstChild.setAttribute("width", "300");
    element.firstChild.setAttribute("height", "200");
  });
}
createGallery(images);
