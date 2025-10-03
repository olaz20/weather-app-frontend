import { weatherIcons } from "./weather-icon.js";
const dayButton = document.getElementById("dayButton");
const dayMenu = document.getElementById("dayMenu");
const dayLabel = document.querySelector(".day-label");
const forecastContainer = document.querySelector(".forecast-container");


import {formatTemp}  from  "./helper_function.js"

dayButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dayMenu.style.display = dayMenu.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (e) => {
    if (!dayButton.contains(e.target) && !dayMenu.contains(e.target)) {
        dayMenu.style.display = "none";
    }
});
dayMenu.querySelectorAll("li").forEach( li => {
    li.addEventListener("click", () => {
        const selectedDay = li.getAttribute("data-day");
        dayLabel.textContent = selectedDay;
        dayMenu.style.display = "none";
        if (window.weatherData) {
      renderHourlyForecast(selectedDay, window.weatherData);
       }
});
});

export function renderHourlyForecast(selectedDay, data){
    if (!data || !data.hourly) return;
    const {time, temperature_2m , weathercode } = data.hourly;
    forecastContainer.innerHTML = "";
    let count = 0;
    time.forEach((timestamp, i) => {
        if (count >= 9) return; 
        const data = new Date(timestamp);
        const weekday = data.toLocaleDateString("en-us" , { weekday: "long"});
    

    if (weekday === selectedDay){
        const card = document.createElement("div");
        card.className = "forecast-card";

        card.innerHTML =
        `
        <div class="forecast-day">
        <p>${data.getHours()}:00</p>
        <img src="${weatherIcons[weathercode[i]] || "assets/images/icon-sunny.webp"}" alt="weather-icon">
        </div>
         <div class="forecast-temp">
          <p>${formatTemp(temperature_2m[i])}</p>
        </div>
        `;
          forecastContainer.appendChild(card);
        count++;
    }
    })

}

