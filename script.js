
let navnar = document.getElementsByClassName("nav");
let menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menubar.offsettop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

