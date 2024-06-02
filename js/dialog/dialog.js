let donate = document.querySelectorAll(".btn-donate");
let adopt = document.querySelectorAll(".adopt-click");
let dialogAdapt = document.querySelector(".dialog-adapt-container");
let dialogDonate = document.querySelector(".dialog-donate-container");

// let sucessPageBtn = document.querySelectorAll('.success-page-navig')

export function diag() {
  // show dialog donate
  for (let i = 0; i < donate.length; i++) {
    donate[i].addEventListener("click", () => {
      showDialogDonate();
    });
  }
  // closedDialogDonate
  document.querySelector(".dialog-cancel").addEventListener("click", () => {
    closedDialogDonate();
  });
  // show dialog adopt
  for (let j = 0; j < adopt.length; j++) {
    adopt[j].addEventListener("click", () => {
      showDialogAdapt();
    });
  }
  // close dialog adopt
  document.querySelector(".modal-cancel").addEventListener("click", () => {
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
  }, 200);
  dialogAdapt.classList.remove("dialog-open");
  dialogAdapt.classList.add("dialog-closed");
}

function showDialogDonate() {
  dialogDonate.classList.remove("dialog-closed-donate");
  dialogDonate.classList.remove("hide");
  dialogDonate.classList.add("dialog-open-donate");
}

function closedDialogDonate() {
  setTimeout(() => {
    dialogDonate.classList.add("hide");
  }, 200);
  dialogDonate.classList.remove("dialog-open-donate");
  dialogDonate.classList.add("dialog-closed-donate");
}
diag()
