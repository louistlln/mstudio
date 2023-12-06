const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");
const navBurger = document.querySelector(".nav-burger");

navBurger.addEventListener("click", () => {
    nav.classList.toggle("active");
    navLinks.classList.toggle("active");
    navBurger.classList.toggle("active");
});