import { diag } from "./dialog/dialog.js";
import { carrosel } from "./main-screen/carousel.js";
diag();
carrosel();

// prevent forms updating page
let form = document.querySelectorAll("form");
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
