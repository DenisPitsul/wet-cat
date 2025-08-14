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
        ({
          title,
          description,
        }) => `<div class="popular-services__swiper-slide swiper-slide">
            <h3 class="popular-services__swiper-slide-title">${title}</h3>
            <p class="popular-services__swiper-slide-text">${description}</p>
            <a href="#" class="popular-services__swiper-slide-link">
              <span>Подробнее</span>
              <img
                class="popular-services__swiper-slide-arrow-icon"
                src="../../assets/svg/main/arrow-right.svg"
                alt="Arrow right"
              />
            </a>
          </div>`
      )
      .join("");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getServices();
});
