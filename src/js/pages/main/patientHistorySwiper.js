import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".patient-history__swiper-container", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".patient-history__swiper-button-next",
    prevEl: ".patient-history__swiper-button-prev",
  },
  breakpoints: {
    620: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 40,
    },
  },
});
