// MOBILE NAV
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight - 100;

    if (rect < windowHeight) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealElements);
revealElements();

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Skill Bar Animation
const skillBars = document.querySelectorAll(".skill-level");

skillBars.forEach((bar) => {
  const value = bar.getAttribute("data-skill");
  setTimeout(() => {
    bar.style.width = value + "%";
  }, 600);
});
