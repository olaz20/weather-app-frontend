import { weatherIcons } from "./weather-icon.js";
import {formatTemp, formatWind, formatPrecip}  from  "./helper_function.js"


export function weatherCard(){
   const container = document.getElementById("ld-weather-content");
  if (!container) return;

    container.innerHTML = `
      <div class="weather-content">
        <div class="weather-info">
          <h2 id="city-name"></h2>
          <p id="current-date"></p>
        </div>
        <div class="weather-temp">
          <img id="weather-icon" src="assets/images/icon-sunny.webp" alt="Sunny" class="weather-icon">
          <h1 id="temperature"></h1>
        </div>
      </div>
    `;
}



function WeatherParamsExist(){
  const container = document.getElementById("weather-params");
  if (!container) return;
    container.innerHTML = `
      <div class="weater-params">
          <p>Feels like</p>
          <p class="value" id="feels-like"></p>
      </div>
      <div class="weater-params">
          <p>Humidity</p>
          <p class="value" id="humidity"></p>
      </div>
      <div class="weater-params">
          <p>Wind</p>
          <p class="value" id="wind"></p>
      </div>
      <div class="weater-params">
          <p>Precipitation</p>
          <p class="value" id="precipitation"></p>
      </div>
    `;
  }







export function renderCurrentWeather(data, cityLabel) {
  WeatherParamsExist();
  const cityEl = document.getElementById("city-name");
  const dateEl = document.getElementById("current-date");
  const tempEl = document.getElementById("temperature");
  const feelsEl = document.getElementById("feels-like");
  const humidityEl = document.getElementById("humidity");
  const windEl = document.getElementById("wind");
  const precipEl = document.getElementById("precipitation");
  const iconEl = document.getElementById("weather-icon");
 

  cityEl.textContent = cityLabel;
  dateEl.textContent = new Date(data.current_weather.time).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  tempEl.textContent = `${formatTemp(data.current_weather.temperature)}`;
  feelsEl.textContent = data.hourly?.apparent_temperature
    ? `${formatTemp(data.hourly.apparent_temperature[0])}`
    : "N/A";
  humidityEl.textContent = data.hourly?.relative_humidity_2m
    ? `${data.hourly.relative_humidity_2m[0]}%`
    : "N/A";
  windEl.textContent = `${formatWind(data.current_weather.windspeed)} `;
  precipEl.textContent = data.hourly?.precipitation
    ? `${formatPrecip(data.hourly.precipitation[0])}`
    : "N/A";

  const code = data.current_weather.weathercode;
  const iconPath = weatherIcons[code] || "assets/images/icon-sunny.webp";
  iconEl.src = iconPath;
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