import { content } from "../index/index.js";
import "./home.css";

export function populateDom() {
  const header = document.createElement("header");
  header.textContent = "Epic Restuarant Name";
  content.append(header);
}
