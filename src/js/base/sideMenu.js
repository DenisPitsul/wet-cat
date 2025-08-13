document.querySelectorAll(".side-menu__btn").forEach((button) => {
  button.addEventListener("click", () => {
    const menuItem = button.parentElement;
    const icon = button.querySelector("use");

    document
      .querySelectorAll(".side-menu__item.side-menu__item--opened")
      .forEach((openItem) => {
        const openedIcon = openItem.querySelector("use");

        if (openItem !== menuItem) {
          openItem.classList.remove("side-menu__item--opened");
          openedIcon.setAttribute("href", "#icon-dropdown-closed");
        }
      });

    menuItem.classList.toggle("side-menu__item--opened");

    if (menuItem.classList.contains("side-menu__item--opened")) {
      icon.setAttribute("href", "#icon-dropdown-opened");
    } else {
      icon.setAttribute("href", "#icon-dropdown-closed");
    }
  });
});

const sideMenu = document.querySelector(".side-menu");
const backdrop = document.querySelector(".backdrop");

function closeMenu() {
  sideMenu.classList.remove("side-menu--opened");
  backdrop.classList.remove("backdrop--active");
  document.body.classList.remove("no-scroll");
}

backdrop.addEventListener("click", closeMenu);

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (sideMenu.classList.contains("side-menu--opened") && swipeDistance < -50) {
    closeMenu();
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1440) {
    closeMenu();
  }
});
