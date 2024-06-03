import { carouselBtns } from "./main-screen/carousel.js";
import { diag } from "./dialog/dialog.js";

diag();
carouselBtns();
let form = document.querySelectorAll("form");
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
