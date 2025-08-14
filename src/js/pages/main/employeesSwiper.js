import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".employees__swiper-container", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".employees__swiper-button-next",
    prevEl: ".employees__swiper-button-prev",
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
