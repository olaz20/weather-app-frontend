import { weatherIcons } from "./weather-icon.js";
import {formatTemp, formatWind, formatPrecip}  from  "./helper_function.js"


export function renderCurrentWeather(data, cityLabel){
    document.getElementById("city-name").textContent = cityLabel;
    document.getElementById("current-date").textContent =
    new Date(data.current_weather.time).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
    });
    document.getElementById("temperature").textContent =
    `${formatTemp(data.current_weather.temperature)}`;

  document.getElementById("feels-like").textContent =
    data.hourly?.apparent_temperature
      ? `${formatTemp(data.hourly.apparent_temperature[0])}`
      : "N/A";

  document.getElementById("humidity").textContent =
    data.hourly?.relative_humidity_2m
      ? `${data.hourly.relative_humidity_2m[0]}%`
      : "N/A";

  document.getElementById("wind").textContent =
    `${formatWind(data.current_weather.windspeed)} `;

  document.getElementById("precipitation").textContent =
    data.hourly?.precipitation
      ? `${ formatPrecip(data.hourly.precipitation[0])}`
      : "N/A";

    let code = data.current_weather.weathercode;
    let iconPath = weatherIcons[code] || "assets/images/icon-sunny.webp";
    document.getElementById("weather-icon").src = iconPath;
}

export function renderDailyForecast(data){
    const container = document.getElementById("daily-forecast");
    container.innerHTML = "";

    const days = data.daily.time;
    const maxTemps = data.daily.temperature_2m_max;
    const minTemps = data.daily.temperature_2m_min;
    const codes = data.daily.weathercode;


    days.forEach((day , i)=>{
        const date = new Date(day);
        const dayLabel = date.toLocaleDateString("en-US", { weekday: "short" });
        const iconPath = weatherIcons[codes[i]] || "assets/images/icon-sunny.webp";

        const card = document.createElement("div");
        card.className = "daily-forecast-card";
        card.innerHTML = `
      <p>${dayLabel}</p>
      <img src="${iconPath}" alt="weather-icon">
      <p>${formatTemp(maxTemps[i])} ${formatTemp(minTemps[i])}</p>
    `;
     container.appendChild(card);
    });
}