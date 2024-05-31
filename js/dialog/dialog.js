let donate = document.querySelectorAll(".btn-donate");
let adopt = document.querySelectorAll(".adopt-click");
let terms = document.getElementById("agree-terms");
let labelRadio = document.querySelector(".agre-container label");
let dialogAdapt = document.querySelector(".dialog-adapt-container");
let btnClosedAdapt = document.querySelector(".modal-cancel");

// let sucessPageBtn = document.querySelectorAll('.success-page-navig')

export function diag() {
  for (let i = 0; i < donate.length; i++) {
    donate[i].addEventListener("click", () => {});
  }

  for (let j = 0; j < adopt.length; j++) {
    adopt[j].addEventListener("click", () => {
      showDialogAdapt();
    });
  }

  terms.addEventListener("click", () => {
    if (terms.checked) {
      labelRadio.style.backgroundColor = "#04C27F";
    } else {
      labelRadio.style.backgroundColor = "#37383f";
    }
  });

  btnClosedAdapt.addEventListener("click", () => {
    closeDialogAdapt();
  });
}

function showDialogAdapt() {
  dialogAdapt.classList.remove("dialog-closed");
  dialogAdapt.classList.remove("hide");
  dialogAdapt.classList.add("dialog-open");
}

function closeDialogAdapt() {
  setTimeout(() => {
    dialogAdapt.classList.add("hide");
  }, 400);
  dialogAdapt.classList.remove("dialog-open");
  dialogAdapt.classList.add("dialog-closed");
}

function hide() {}
