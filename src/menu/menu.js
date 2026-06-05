import { content } from "../index/index.js";
import "./menu.css";

export function populateMenu() {
  createItem("item 1", 15);
  createItem("item 2", 20);
  createItem("item 3", 7);
}

function createItem(name, price) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const itemName = document.createElement("div");
  itemName.textContent = name;

  const itemPrice = document.createElement("div");
  itemPrice.textContent = `${price}$`;

  item.append(itemName);
  item.append(itemPrice);

  content.append(item);
}
