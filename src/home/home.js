import { content } from "../index/index.js";
import homeImage from "./homepage.jpg";

export function populateHome() {
  content.style.backgroundImage = `url(${homeImage})`;
  content.style.backgroundRepeat = "no-repeat";
  content.style.backgroundSize = "100% 100%";

  const header = document.createElement("header");
  header.textContent = "Epic Restuarant Name";
  content.append(header);
}
