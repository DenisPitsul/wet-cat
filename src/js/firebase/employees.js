import { collection, getDocs, query } from "firebase/firestore";

import { db } from "./config.js";

async function getEmployees() {
  const employeesQuery = query(collection(db, "employees"));

  const employeesSnapshot = await getDocs(employeesQuery);

  const employeesList = employeesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const container = document.querySelector(".employees__swiper-wrapper");

  if (container) {
    container.innerHTML = employeesList
      .map(
        ({
          imagePath,
          name,
          position,
          workingTime1,
          workingTime2,
        }) => `<div class="employees__swiper-slide swiper-slide">
            <div class="employees__swiper-slide-wrapper">
              <div class="employees__swiper-slide-img-wrapper">
                <div class="employees__swiper-slide-img-bg"></div>
                <img
                  class="employees__swiper-slide-img"
                  src="${imagePath}"
                  alt="${name}"
                />
                <div class="employees__swiper-slide-schedule">
                  <span class="employees__swiper-slide-label">
                    Ближайшие приемы
                  </span>
                  <div class="employees__swiper-slide-schedule-line"></div>
                  <span class="employees__swiper-slide-time1"
                    >${workingTime1}</span
                  >
                  <div class="employees__swiper-slide-schedule-line"></div>
                  <span class="employees__swiper-slide-time2"
                    >${workingTime2}</span
                  >
                </div>
              </div>
              <h3 class="employees__swiper-slide-title">
                ${name}
              </h3>
              <p class="employees__swiper-slide-text">
                ${position}
              </p>
            </div>
          </div>`
      )
      .join("");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEmployees();
});
