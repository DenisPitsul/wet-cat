import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".employees-swiper__container", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".employees-swiper__button-next",
    prevEl: ".employees-swiper__button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
