let mybutton = document.getElementById("myBtn");

function scrolltop() {
    if(window.scrollY > 500) {
        mybutton.style.display = "block";
    }else {
        mybutton.style.display = "none";
    }

    };
window.onscroll = function() {scrolltop()};
mybutton.addEventListener("click",function(){
    window.scrollTo(0,0)
})
