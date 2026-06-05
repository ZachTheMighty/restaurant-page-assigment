import { content } from "../index/index.js";

export function populateContact() {
  const contact = document.createElement("div");
  contact.textContent = "Contact us";

  const number = document.createElement("div");
  number.textContent = "666-666-666";

  const email = document.createElement("div");
  email.textContent = "a@b";

  content.append(contact);
  content.append(number);
  content.append(email);
}
