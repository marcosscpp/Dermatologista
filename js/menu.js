let btn = document.getElementById("ham-btn");
let menuSpace = document.getElementById("menu-space");
let menuItems = document.getElementById("menu-items");

btn.addEventListener("click", function () {
  menuItems.classList.toggle("menu__active");
  menuSpace.classList.toggle("activate-space")
});
