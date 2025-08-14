import { collection, getDocs, query } from "firebase/firestore";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { db } from "./config.js";

async function getEmployees() {
  const snapshot = await getDocs(query(collection(db, "patientHistory")));
  const slides = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const wrapper = document.querySelector(".patient-history__swiper-wrapper");
  if (!wrapper) return;

  wrapper.innerHTML = slides
    .map(
      ({ imagePath, title, date }) => `
    <div class="patient-history__swiper-slide swiper-slide">
      <div class="patient-history__swiper-slide-wrapper">
        <div class="patient-history__swiper-slide-img-wrapper">
          <div class="patient-history__swiper-slide-img-bg"></div>
          <img class="patient-history__swiper-slide-img" src="${imagePath}" alt="${title}" />
        </div>
        <h3 class="patient-history__swiper-slide-title">${title}</h3>
        <p class="patient-history__swiper-slide-date">${date}</p>
      </div>
    </div>`
    )
    .join("");

  new Swiper(".patient-history__swiper-container", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".patient-history__swiper-button-next",
      prevEl: ".patient-history__swiper-button-prev",
    },
    breakpoints: {
      620: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 30 },
      1440: { slidesPerView: 4, spaceBetween: 40 },
    },
  });
}

window.addEventListener("DOMContentLoaded", getEmployees);
