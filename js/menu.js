let hambBtn = document.getElementById("ham-btn");
let menuSpace = document.getElementById("menu-space");
let menuItems = document.getElementById("menu-items");

hambBtn.addEventListener("click", function () {
  menuItems.classList.toggle("menu__active");
  menuSpace.classList.toggle("activate-space")
});
