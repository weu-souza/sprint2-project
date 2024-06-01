import { load, resize } from "./main-screen/Photo.js";
import { nextButton, prevButton } from "./main-screen/carousel.js";
import { diag } from "./dialog/dialog.js";

diag();
load;
resize;
prevButton;
nextButton;


















// prevent forms updating page
let form = document.querySelectorAll("form");
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
