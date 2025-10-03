import { renderCurrentWeather , renderDailyForecast} from './left-design.js'
import {renderHourlyForecast} from './right-design.js'
const suggestionsEl = document.getElementById("suggestions");
const searchButton = document.querySelector(".submit-bar");
const searchInput = document.getElementById("searchInput");

async function showSuggestions(query){
    if (query.length === 0) {
    suggestionsEl.style.display="none";
    return;
}

const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
const data = await res.json();

if (!data.results) {
    suggestionsEl.innerHTML = `<li>No results found</li>`;
    suggestionsEl.style.display="block";
    return; }

suggestionsEl.innerHTML = "";
data.results.forEach(city => 
{
    const li = document.createElement("li");
    const label = `${city.name}, ${city.country}`;
    li.textContent = label;
    li.addEventListener("click", () => selectCity(city.latitude, city.longitude, label));
    suggestionsEl.appendChild(li);
    suggestionsEl.style.display = "block";
});

}




searchInput.addEventListener("input", (e) => showSuggestions(e.target.value));

async function selectCity(lat, lon, label){
    searchInput.value = label;
    suggestionsEl.style.display="none";
}

async function fetchWeatherData(lat, lon, label){
    suggestionsEl.innerHTML = `<li><span>🔄 Search in progress...</span></li>`;
    suggestionsEl.style.display="block";
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,windspeed_10m_max&timezone=auto`);
       
    if (!res.ok){
        throw new Error("Weather API request failed");
    }
    const data = await res.json();
    window.weatherData = data;
    renderCurrentWeather(data, label);
    renderDailyForecast(data);
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    document.querySelector(".day-label").textContent = today;
    renderHourlyForecast(today, data);
     suggestionsEl.style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        suggestionsEl.innerHTML = `<li><span> Could not fetch weather</span></li>`;
    }

}



searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
        const city = data.results[0];
        const label = `${city.name}, ${city.country}`
        await fetchWeatherData(city.latitude, city.longitude, label);
    } 
});




