const hamburgerMenu = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const homePage = document.getElementById("#home");

hamburgerMenu.onclick = () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
};
menuList.onclick = function (e) {
  if (e.target.classList !== "menu-btn") {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
};
