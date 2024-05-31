// code for carousel

let index = 0;
let btnPrev = document.getElementById("button-left-carousel");
let btnNext = document.getElementById("button-right-carousel");

let dots = document.querySelectorAll(".dots-container #dots");
let imgsCarrossel = document.querySelectorAll("#imgs-carousel img");

let imgs = [
  "img/carousel-imgs/1.png",
  "img/carousel-imgs/2.png",
  "img/carousel-imgs/3.png",
  "img/carousel-imgs/4.png",
  "img/carousel-imgs/5.png",
];

export const nextButton = btnNext.addEventListener("click", () => {
  if (index === dots.length - 1) {
    index = 0;
  } else {
    index++;
  }
  for (let i = 0; i <= dots.length; i++) {
    if (i === index) {
      dots.forEach((j) => j.classList.remove("dots-active"));
      dots.forEach((j) => j.classList.remove("slide-right"));
      dots[index].classList.add("slide-right");
      dots[index].classList.add("dots-active");

      changeImg();
    }
  }
});

export const prevButton = btnPrev.addEventListener("click", () => {
  if (index === 0) {
    index = dots.length - 1;
  } else {
    index--;
  }
  for (let i = dots.length - 1; i > -1; i--) {
    if (i === index) {
      dots.forEach((j) => j.classList.remove("dots-active"));
      dots.forEach((j) => j.classList.remove("slide-left"));
      dots[index].classList.add("slide-left");
      dots[index].classList.add("dots-active");
      changeImg();
    }
  }
});

const changeImg = () => {
  imgsCarrossel[0].setAttribute(
    "src",
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  imgsCarrossel[1].setAttribute(
    "src",
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  imgsCarrossel[2].setAttribute(
    "src",
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  imgsCarrossel[3].setAttribute(
    "src",
    imgs[Math.floor(Math.random() * imgs.length)]
  );
};