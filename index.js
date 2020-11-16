const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".mobile-nav");
const roll = document.querySelector("#hamburgerRoll");

function hamburgerClicked(){
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("mobile-nav--active");
}

hamburger.addEventListener("click", hamburgerClicked);
roll.addEventListener("click", hamburgerClicked);
    

