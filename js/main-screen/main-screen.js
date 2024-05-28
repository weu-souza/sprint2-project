

//function to replace image according to the web load
export const load = (window.onload = function () {
changeImage(this.innerWidth)
});

export const resize = window.onresize = function(){
  changeImage(this.innerWidth)
} 

//function to replace image according to the web resize
function changeImage(size){
  if (size <= 500) {
    document.getElementById("cat-image").setAttribute("src", "img/Dog_Img.png");
  } else if (size > 500) {
    document.getElementById("cat-image").setAttribute("src", "img/cat-dog.png");
  }
}


