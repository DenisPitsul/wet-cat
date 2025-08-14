import { collection, getDocs, query } from "firebase/firestore";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { db } from "./config.js";

async function getEmployees() {
  const employeesQuery = query(collection(db, "employees"));

  const employeesSnapshot = await getDocs(employeesQuery);

  const employeesList = employeesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const container = document.querySelector(".employees-swiper__wrapper");

  if (container) {
    container.innerHTML = employeesList
      .map(
        ({
          imagePath,
          name,
          position,
          workingTime1,
          workingTime2,
        }) => `<div class="employees-swiper__slide swiper-slide">
            <div class="employees-swiper__slide-wrapper">
              <div class="employees-swiper__slide-img-wrapper">
                <div class="employees-swiper__slide-img-bg"></div>
                <img
                  class="employees-swiper__slide-img"
                  src="${imagePath}"
                  alt="${name}"
                />
                <div class="employees-swiper__slide-schedule">
                  <span class="employees-swiper__slide-label">
                    Ближайшие приемы
                  </span>
                  <div class="employees-swiper__slide-schedule-line"></div>
                  <span class="employees-swiper__slide-time1"
                    >${workingTime1}</span
                  >
                  <div class="employees-swiper__slide-schedule-line"></div>
                  <span class="employees-swiper__slide-time2"
                    >${workingTime2}</span
                  >
                </div>
              </div>
              <h3 class="employees-swiper__slide-title">
                ${name}
              </h3>
              <p class="employees-swiper__slide-text">
                ${position}
              </p>
            </div>
          </div>`
      )
      .join("");
  }

  initSwiper();
}

function initSwiper() {
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
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

window.addEventListener("DOMContentLoaded", () => {
  getEmployees();
});
