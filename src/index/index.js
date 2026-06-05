import "./index.css";
import { populateHome } from "../home/home.js";
import { populateMenu } from "../menu/menu.js";
import { populateContact } from "../contact/contact.js";

export const content = document.querySelector("#content");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

populateHome();

home.addEventListener("click", () => {
  content.textContent = "";
  populateHome();
});

menu.addEventListener("click", () => {
  content.textContent = "";
  content.style.backgroundImage = "";
  populateMenu();
});

contact.addEventListener("click", () => {
  content.textContent = "";
  content.style.backgroundImage = "";
  populateContact();
});
