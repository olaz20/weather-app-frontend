import {renderCurrentWeather, renderDailyForecast} from "./left-design.js"

import {renderHourlyForecast} from "./right-design.js"


const unitsButton = document.querySelector(".units")
const unitOptions = document.querySelectorAll(".dropdown-content li")
const dropdownContent = document.querySelector(".dropdown-content");
const switchTitle = document.querySelector(".dropdown-title");

window.weatherUnits = {
    temperature: "celsius",
    wind: "kmh",
    precipitation: "mm"
}

function setUnits(units) {
  window.weatherUnits = { ...window.weatherUnits, ...units };
  updateDropdownUI();
  rerenderWeather();
}

function rerenderWeather() {
  if (window.weatherData) {
    renderCurrentWeather(window.weatherData);
    renderDailyForecast(window.weatherData);
    renderHourlyForecast(
      document.querySelector(".day-label").textContent,
      window.weatherData
    );
  }
}


function updateDropdownUI() {
  document.querySelectorAll(".group").forEach((group) => {
    const lis = group.querySelectorAll("li");
    const tick = group.querySelector("img");

    lis.forEach((li) => li.classList.remove("active"));

    if (group.querySelector("p").textContent.includes("Temperature")) {
      const li =
        window.weatherUnits.temperature === "celsius" ? lis[0] : lis[1];
      li.classList.add("active");
      li.appendChild(tick);
    }

    if (group.querySelector("p").textContent.includes("Wind")) {
      const li = window.weatherUnits.wind === "kmh" ? lis[0] : lis[1];
      li.classList.add("active");
      li.appendChild(tick);
    }

    if (group.querySelector("p").textContent.includes("Precipitation")) {
      const li = window.weatherUnits.precipitation === "mm" ? lis[0] : lis[1];
      li.classList.add("active");
      li.appendChild(tick);
    }
  });
}
unitsButton.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});


window.addEventListener("click", (e) => {
  if (!unitsButton.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = "none";
  }
});


switchTitle.addEventListener("click", () => {
  const isImperial = window.weatherUnits.temperature === "fahrenheit";

  if (isImperial) {
    setUnits({ temperature: "celsius", wind: "kmh", precipitation: "mm" });
    switchTitle.textContent = "Switch to Imperial";
  } else {
    setUnits({ temperature: "fahrenheit", wind: "mph", precipitation: "in" });
    switchTitle.textContent = "Switch to Metric";
  }
});


unitOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const ul = option.parentElement;
    const tick = ul.querySelector("img");

    ul.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
    option.classList.add("active");
    if (tick) option.appendChild(tick);

    const text = option.textContent.toLowerCase();

    if (text.includes("celsius")) setUnits({ temperature: "celsius" });
    if (text.includes("fahrenheit")) setUnits({ temperature: "fahrenheit" });
    if (text.includes("km/h")) setUnits({ wind: "kmh" });
    if (text.includes("mph")) setUnits({ wind: "mph" });
    if (text.includes("millimeters")) setUnits({ precipitation: "mm" });
    if (text.includes("inches")) setUnits({ precipitation: "in" });
  });
});

