class WeatherSkeleton {
  constructor() {
    this.weatherCard = document.getElementById("weather-content");
    this.CityCard = document.getElementById("city-name");
    this.currentDate = document.getElementById("current-date");
    this.weatherIcon = document.getElementById("weather-icon");
    this.temperature = document.getElementById("temperature");
    this.paramsContainer = document.getElementById("weather-params");
  }

  showSkeletonLoaders() {
    this.weatherCard.innerHTML = `
      <div class="skeleton-card">
        <div class="skeleton-info">
          <div class="skeleton skeleton-text" style="width:clamp(80px, 15vw, 150px);height:clamp(12px, 2vw, 20px);"></div>
          <div class="skeleton skeleton-text" style="width:clamp(60px, 10vw, 100px);height:clamp(10px, 1.8vw, 16px)"></div>
        </div>
        <div class="skeleton-temp">
          <div class="skeleton skeleton-img" style="width:clamp(30px, 4vw, 50px);height:clamp(30px, 4vw, 50px);border-radius:50%;"></div>
          <div class="skeleton skeleton-text" style="width:clamp(40px, 5vw, 60px);height:clamp(20px, 4vw, 30px);"></div>
        </div>
      </div>
    `;
  }



showParamsSkeleton() {
    this.paramsContainer.innerHTML = `
      <div class="params-card">
        ${["Feels like", "Humidity", "Wind", "Precipitation"]
          .map(
            label => `
          <div class="weater-params">
            <p>${label}</p>
            <div class="skeleton skeleton-text" style="width:60px;height:16px;"></div>
          </div>`
          )
          .join("")}
      </div>
    `;
  }
  showForecastSkeleton() {
  const container = document.getElementById("daily-forecast");

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.className = "forecast-card ";

    card.innerHTML = `
      <div class="skeleton skeleton-text" style="width:70px;height:14px;margin-bottom:4px;"></div>
      <div class="skeleton skeleton-img" style="width:40px;height:40px;border-radius:50%;margin-bottom:6px;"></div>
      <div class="skeleton skeleton-text" style="width:50px;height:14px;"></div>
    `;

    container.appendChild(card);
  }
}
showHourlySkeleton() {
  const container = document.getElementById("hourly-forecast");
  container.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.className = "hourly-skeleton";
    card.innerHTML = `
      <div class="skeleton skeleton-text" style="width:60px;height:16px;margin-bottom:6px;"></div>
      <div class="skeleton skeleton-text" style="width:30px;height:16px;"></div>
    `;

    container.appendChild(card);
  }
}

}


const skeleton = new WeatherSkeleton();
skeleton.showSkeletonLoaders();
skeleton.showParamsSkeleton();
skeleton.showForecastSkeleton();
skeleton.showHourlySkeleton();
