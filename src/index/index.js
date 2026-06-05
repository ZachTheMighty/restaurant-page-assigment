import "./index.css";
import { populateHome } from "../home/home.js";
import { populateMenu } from "../menu/menu.js";

export const content = document.querySelector("#content");

populateMenu();
