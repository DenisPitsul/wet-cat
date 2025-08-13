const burgerOpenBtn = document.getElementById("burger-open-btn");
const sideMenu = document.querySelector(".side-menu");
const backdrop = document.querySelector(".backdrop");

burgerOpenBtn.addEventListener("click", () => {
  sideMenu.classList.add("side-menu--opened");
  backdrop.classList.add("backdrop--active");
  document.body.classList.add("no-scroll");
});
