const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

window.onload = function() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
  document.querySelector(".content").style.display = "block";
};

const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;

function animateCursor() {
    const deltaX = mouseX - parseFloat(cursor.style.left || 0);
    const deltaY = mouseY - parseFloat(cursor.style.top || 0);
    
    const speed = 0.1; 
    cursor.style.left = `${parseFloat(cursor.style.left || 0) + deltaX * speed}px`;
    cursor.style.top = `${parseFloat(cursor.style.top || 0) + deltaY * speed}px`;

    requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

animateCursor();