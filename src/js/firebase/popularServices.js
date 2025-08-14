import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./config.js";

async function getServices() {
  const popularServicesQuery = query(collection(db, "popularServices"));
  const popularServicesSnapshot = await getDocs(popularServicesQuery);

  const popularServicesList = popularServicesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const container = document.querySelector(".popular-services__swiper-wrapper");

  if (container) {
    container.innerHTML = popularServicesList
      .map(
        ({ title, description }) => `
          <div class="popular-services__swiper-slide swiper-slide">
            <h3 class="popular-services__swiper-slide-title">${title}</h3>
            <p class="popular-services__swiper-slide-text">${description}</p>
            <a href="#" class="popular-services__swiper-slide-link">
              <span>Подробнее</span>
              <img
                class="popular-services__swiper-slide-arrow-icon"
                src="assets/svg/main/arrow-right.svg"
                alt="Arrow right"
              />
            </a>
          </div>`
      )
      .join("");
  }

  initSwiper();
}

function initSwiper() {
  new Swiper(".popular-services__swiper-container", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
      nextEl: ".popular-services__swiper-button-next",
      prevEl: ".popular-services__swiper-button-prev",
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
}

window.addEventListener("DOMContentLoaded", getServices);
