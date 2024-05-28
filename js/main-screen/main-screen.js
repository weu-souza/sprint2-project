
let img1 = document.getElementById("cat-image")
let img =  document.getElementById("dog-image")
//function to replace image according to the web load
export const load = (window.onload = function () {
changeImage(this.innerWidth)
});

export const resize = window.onresize = function(){
  changeImage(this.innerWidth)
} 

//function to replace image according to the web resize
function changeImage(size){
  if (size <= 800) {
    
    img1.parentNode.classList.add('hide')
    img.parentNode.classList.remove("hide");
    img.setAttribute("src", "img/Dog_Img.png");
  } else if (size > 900) {
    img1.parentNode.classList.remove('hide')
    img.parentNode.classList.add("hide");
    img1.setAttribute("src", "img/cat-dog.png");
    
  }
}


