const form = document.querySelectorAll("form");
export function submit() {
  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener("submit", (event) => {
      // window.location.href = "/pages/success.html";
      console.log((window.location.href = "pages/success.html"));
      event.preventDefault();
    });
  }
}
