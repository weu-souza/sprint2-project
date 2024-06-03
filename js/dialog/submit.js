const donate = document.getElementById("donate-submit");
const adopt = document.getElementById("form-adopt");

export function submit() {
  preventPageReloadOnSubmit();
  donate.addEventListener("submit", () => {
    window.location.href = "/pages/success.html";
  });
  adopt.addEventListener("submit", () => {
    window.location.href = "/pages/success.html";
  });
}
function preventPageReloadOnSubmit() {
  let form = document.querySelectorAll("form");
  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}
