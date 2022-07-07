
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if(currentScroll > 0){
        window.scrollTo(0, currentScroll - (currentScroll/ 4.5));
        window.requestAnimationFrame(scrollUp);
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

  var scroll = document.documentElement.scrollTop;

  if(scroll > 10){
    buttonUp.style.transform = "scale(1)";
  }else if(scroll < 10){
    buttonUp.style.transform = "scale(0)";
  }

}


