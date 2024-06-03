const donate = document.querySelectorAll("#form-submit");
export function submit() {
  preventPageReloadOnSubmit();
  for (let i = 0; i < donate.length; i++) {
    donate[i].addEventListener("submit", () => {
        window.location.href = "/pages/success.html";
      });
    
  }
}
function preventPageReloadOnSubmit() {
  const form = document.querySelectorAll("form");
  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}
