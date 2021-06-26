const btnToggle = document.querySelector(".menu-icon")
const navMenu = document.querySelector(".nav-menu")

btnToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible")
})