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
          <div class="skeleton skeleton-text" style="width:150px;height:20px;"></div>
          <div class="skeleton skeleton-text" style="width:100px;height:16px;"></div>
        </div>
        <div class="skeleton-temp">
          <div class="skeleton skeleton-img" style="width:50px;height:50px;border-radius:50%;"></div>
          <div class="skeleton skeleton-text" style="width:60px;height:30px;"></div>
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

}


const skeleton = new WeatherSkeleton();
skeleton.showSkeletonLoaders();
skeleton.showParamsSkeleton();
