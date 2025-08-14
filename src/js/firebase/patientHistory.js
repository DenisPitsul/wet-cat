import { collection, getDocs, query } from "firebase/firestore";

import { db } from "./config.js";

async function getEmployees() {
  const patientHistoryQuery = query(collection(db, "patientHistory"));

  const patientHistorySnapshot = await getDocs(patientHistoryQuery);

  const patientHistoryList = patientHistorySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const container = document.querySelector(".patient-history__swiper-wrapper");

  if (container) {
    container.innerHTML = patientHistoryList
      .map(
        ({
          imagePath,
          title,
          date,
        }) => `<div class="patient-history__swiper-slide swiper-slide">
            <div class="patient-history__swiper-slide-wrapper">
              <div class="patient-history__swiper-slide-img-wrapper">
                <div class="patient-history__swiper-slide-img-bg"></div>
                <img
                  class="patient-history__swiper-slide-img"
                  src="${imagePath}"
                  alt="${title}"
                />
              </div>
              <h3 class="patient-history__swiper-slide-title">${title}</h3>
              <p class="patient-history__swiper-slide-date">${date}</p>
            </div>
          </div>`
      )
      .join("");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEmployees();
});
