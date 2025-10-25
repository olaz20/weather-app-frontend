import { weatherIcons } from "./weather-icon.js";
const dayButton = document.getElementById("dayButton");
const dayMenu = document.getElementById("dayMenu");
const dayLabel = document.querySelector(".day-label");
const forecastContainer = document.querySelector(".forecast-container");

import { formatTemp } from "./helper_function.js";

dayButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dayMenu.style.display = dayMenu.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (e) => {
  if (!dayButton.contains(e.target) && !dayMenu.contains(e.target)) {
    dayMenu.style.display = "none";
  }
});
dayMenu.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const selectedDay = li.getAttribute("data-day");
    dayLabel.textContent = selectedDay;
    dayMenu.style.display = "none";
    if (window.weatherData) {
      renderHourlyForecast(selectedDay, window.weatherData);
    }
  });
});

export function renderHourlyForecast(selectedDay, data) {
  if (!data || !data.hourly) return;
  const { time, temperature_2m, weathercode } = data.hourly;
  forecastContainer.innerHTML = "";
  const now = new Date();
  const currentHour = now.getHours();

  const filtered = time
    .map((timestamp, i) => {
      const date = new Date(timestamp);
      const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
      return { date, weekday, temp: temperature_2m[i], code: weathercode[i] };
    })
    .filter((entry) => entry.weekday === selectedDay);

  let startIndex = 0;
  if (selectedDay === now.toLocaleDateString("en-US", { weekday: "long" })) {
    startIndex = filtered.findIndex((e) => e.date.getHours() >= currentHour);
    if (startIndex === -1) startIndex = 0;
    }
    const nextHours = filtered.slice(startIndex, startIndex + 9);
    nextHours.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "forecast-card";

    card.innerHTML = `
      <div class="forecast-day">
        <p>${entry.date.getHours()}:00</p>
        <img src="${
          weatherIcons[entry.code] || "assets/images/icon-sunny.webp"
        }" alt="weather-icon">
      </div>
      <div class="forecast-temp">
        <p>${formatTemp(entry.temp)}</p>
      </div>
    `;

    forecastContainer.appendChild(card);
  });
}
