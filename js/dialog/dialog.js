let donate = document.querySelectorAll(".btn-donate");
let adopt = document.querySelectorAll(".adopt-click");
let terms = document.getElementById("agree-terms");
let labelRadio = document.querySelector(".agre-container label");
let dialogAdapt = document.querySelector(".dialog-adapt-container");
let payment = document.querySelectorAll('[name = "payment"] ');
let checkUncheck = document.querySelectorAll("#check");
let svg = document.querySelectorAll("#check svg");
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
  // agree with privacy policy active desactive
  terms.addEventListener("click", () => {
    if (terms.checked) {
      labelRadio.style.backgroundColor = "#04C27F";
    } else {
      labelRadio.style.backgroundColor = "#37383f";
    }
  });
  // close dialog adopt
  document.querySelector(".modal-cancel").addEventListener("click", () => {
    closeDialogAdapt();
  });
  // verifying payment metodh gambiarra
  for (let k = 0; k < payment.length; k++) {
    payment[k].addEventListener("click", () => {
      if (payment[k].getAttribute("id") === "pix") {
        // added class to checked
        checkUncheck[0].parentNode.classList.remove("payment-uncheck");
        svg[0].classList.remove("hide");
        checkUncheck[0].parentNode.classList.add("payment-checked");
        // added class to uncheck
        checkUncheck[1].parentNode.classList.remove("payment-checked");
        checkUncheck[1].parentNode.classList.add("payment-uncheck");
        svg[1].classList.add("hide");
        checkUncheck[2].parentNode.classList.remove("payment-checked");
        checkUncheck[2].parentNode.classList.add("payment-uncheck");
        svg[2].classList.add("hide");
      } else if (payment[k].getAttribute("id") === "credit-card") {
        // added class to checked
        checkUncheck[1].parentNode.classList.remove("payment-uncheck");
        svg[1].classList.remove("hide");
        checkUncheck[1].parentNode.classList.add("payment-checked");
        // added class to uncheck
        checkUncheck[0].parentNode.classList.remove("payment-checked");
        checkUncheck[0].parentNode.classList.add("payment-uncheck");
        svg[0].classList.add("hide");

        checkUncheck[2].parentNode.classList.remove("payment-checked");
        checkUncheck[2].parentNode.classList.add("payment-uncheck");
        svg[2].classList.add("hide");
      } else if (payment[k].getAttribute("id") === "paypal") {
        // added class to checked
        checkUncheck[2].parentNode.classList.remove("payment-uncheck");
        svg[2].classList.remove("hide");
        checkUncheck[2].parentNode.classList.add("payment-checked");
        // added class to uncheck
        checkUncheck[1].parentNode.classList.remove("payment-checked");
        checkUncheck[1].parentNode.classList.add("payment-uncheck");
        svg[1].classList.add("hide");
        checkUncheck[0].parentNode.classList.remove("payment-checked");
        checkUncheck[0].parentNode.classList.add("payment-uncheck");
        svg[0].classList.add("hide");
      }
    });
  }
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


function showDialogDonate() {
  dialogDonate.classList.remove("dialog-closed-donate");
  dialogDonate.classList.remove("hide");
  dialogDonate.classList.add("dialog-open-donate");
}

function closedDialogDonate() {
  setTimeout(() => {
    dialogDonate.classList.add("hide");
  }, 400);
  dialogDonate.classList.remove("dialog-open-donate");
  dialogDonate.classList.add("dialog-closed-donate");
}
