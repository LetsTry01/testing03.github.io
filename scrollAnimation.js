// scrollAnimation.js

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".fixed-header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
