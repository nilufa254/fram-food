//  Header Scroller//////////////
let nav = document.querySelectorAll(".custom-navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop < 50){
        nav.classList.add(".header-fixed");
    }else{
        nav.classList.remove(".header-fixed");
    }
}



// Nav Hide////////////////////////
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})