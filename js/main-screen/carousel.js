let index = 0;
let btnPrev = document.getElementById("button-left-carousel");
let btnNext = document.getElementById("button-right-carousel");
let dots = document.querySelectorAll(".dots-container #dots");
let imgsCarrossel = document.querySelectorAll("#imgs-carousel img");
export function carouselBtns() {
  btnNext.addEventListener("click", () => {
    if (index === dots.length - 1) {
      index = 0;
    } else {
      index++;
    }
    for (let i = 0; i <= dots.length; i++) {
      if (i === index) {
        dots.forEach((j) => j.classList.remove("dots-active"));
        dots.forEach((j) => j.classList.remove("slide-right"));
        dots.forEach((j) => j.classList.remove("slide-left"));
        dots[index].classList.add("slide-right");
        dots[index].classList.add("dots-active");
        changeImg(i);
      }
    }
  });
  btnPrev.addEventListener("click", () => {
    if (index === 0) {
      index = dots.length - 1;
    } else {
      index--;
    }
    for (let i = dots.length - 1; i > -1; i--) {
      if (i === index) {
        dots.forEach((j) => j.classList.remove("dots-active"));
        dots.forEach((j) => j.classList.remove("slide-left"));
        dots.forEach((j) => j.classList.remove("slide-right"));
        dots[index].classList.add("slide-left");
        dots[index].classList.add("dots-active");
        changeImg(i);
      }
    }
  });
}
const imgs = [
  {
    um: "img/carousel-imgs/1.png",
    dois: "img/carousel-imgs/2.png",
    tres: "img/carousel-imgs/3.png",
    quatro: "img/carousel-imgs/4.png",
  },
  {
    um: "img/carousel-imgs/2.png",
    dois: "img/carousel-imgs/3.png",
    tres: "img/carousel-imgs/4.png",
    quatro: "img/carousel-imgs/5.png",
  },
  {
    um: "img/carousel-imgs/3.png",
    dois: "img/carousel-imgs/4.png",
    tres: "img/carousel-imgs/5.png",
    quatro: "img/carousel-imgs/1.png",
  },
  {
    um: "img/carousel-imgs/4.png",
    dois: "img/carousel-imgs/5.png",
    tres: "img/carousel-imgs/1.png",
    quatro: "img/carousel-imgs/2.png",
  },
  {
    um: "img/carousel-imgs/5.png",
    dois: "img/carousel-imgs/1.png",
    tres: "img/carousel-imgs/2.png",
    quatro: "img/carousel-imgs/3.png",
  },
];
const changeImg = (i) => {
  imgsCarrossel[0].setAttribute("src", imgs[i].um);
  imgsCarrossel[1].setAttribute("src", imgs[i].dois);
  imgsCarrossel[2].setAttribute("src", imgs[i].tres);
  imgsCarrossel[3].setAttribute("src", imgs[i].quatro);
};
