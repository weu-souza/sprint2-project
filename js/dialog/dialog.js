let btnDiag = document.querySelectorAll(".btn-donate");
let btnAdp = document.querySelectorAll(".adopt-click");
let terms = document.getElementById("agree-terms");
let labelRadio = document.querySelector(".agre-container label");


// let sucessPageBtn = document.querySelectorAll('.success-page-navig')

export function diag() {
  for (let i = 0; i < btnDiag.length; i++) {
    btnDiag[i].addEventListener("click", () => {
      console.log("clicou");
    });
  }

  for (let j = 0; j < btnAdp.length; j++) {
    btnAdp[j].addEventListener("click", () => {
      console.log("adpt");
    });
  }

  terms.addEventListener("click", () => {
    if (terms.checked) {
      labelRadio.style.backgroundColor = "#04C27F";
    } else {
      labelRadio.style.backgroundColor = "#37383f";
    }
  });
}
