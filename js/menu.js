const btn = document.getElementById("ham-btn");
const menuSpace = document.getElementById("menu-space");
const menuItems = document.getElementById("menu-items");

document.documentElement.className += " js";

btn.addEventListener("click", function () {
  menuItems.classList.toggle("menu__active");
  menuSpace.classList.toggle("activate-space");
});

const sections = document.querySelectorAll(".scroll-js");
function ativaSections() {
  sections.forEach((section) => {
    const sectionTop =
      section.getBoundingClientRect().top - window.innerHeight * 0.6;

    if (sectionTop < 0) {
      section.classList.add("ativo");
      const divisoria = section.nextElementSibling;
      if (divisoria) {
        divisoria.classList.add("ativo");
      }
    }
  });
}
ativaSections();

window.addEventListener("scroll", ativaSections);
