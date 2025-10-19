export class WeatherSkeleton {
  constructor() {
    this.weatherCard = document.getElementById("ld-weather-content");
    this.paramsContainer = document.getElementById("weather-params");
    this.dailyContainer = document.getElementById("daily-forecast");
    this.hourlyContainer = document.getElementById("hourly-forecast");
  }

  show() {
    document.body.classList.add("loading");
    this.clear();
    this.showSkeletonLoaders();
    this.showParamsSkeleton();
    this.showForecastSkeleton();
    this.showHourlySkeleton();
  }

  hide() {
    document.body.classList.remove("loading");
  }

  clear() {
    this.weatherCard.innerHTML = "";
    this.paramsContainer.innerHTML = "";
    this.dailyContainer.innerHTML = "";
    this.hourlyContainer.innerHTML = "";
  }

  showSkeletonLoaders() {
    this.weatherCard.innerHTML = `
      <div class="skeleton-card">
        <div class="skeleton-info">
          <div class="skeleton skeleton-text" style="width:clamp(80px,15vw,150px);height:clamp(12px,2vw,20px);"></div>
          <div class="skeleton skeleton-text" style="width:clamp(60px,10vw,100px);height:clamp(10px,1.8vw,16px);"></div>
        </div>
        <div class="skeleton-temp">
          <div class="skeleton skeleton-img" style="width:clamp(30px,4vw,50px);height:clamp(30px,4vw,50px);border-radius:50%;"></div>
          <div class="skeleton skeleton-text" style="width:clamp(40px,5vw,60px);height:clamp(20px,4vw,30px);"></div>
        </div>
      </div>`;
  }

  showParamsSkeleton() {
    this.paramsContainer.innerHTML = `
        ${["Feels like", "Humidity", "Wind", "Precipitation"]
          .map(
            label => `
            <div class="weater-params">
              <p>${label}</p>
              <div class="skeleton skeleton-text" style="width:60px;height:16px;"></div>
            </div>`
          )
          .join("")}`;
  }

  showForecastSkeleton() {
    this.dailyContainer.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const card = document.createElement("div");
      card.className = "forecast-card";
      card.innerHTML = `
        <div class="skeleton skeleton-text" style="width:70px;height:14px;margin-bottom:4px;"></div>
        <div class="skeleton skeleton-img" style="width:40px;height:40px;border-radius:50%;margin-bottom:6px;"></div>
        <div class="skeleton skeleton-text" style="width:50px;height:14px;"></div>`;
      this.dailyContainer.appendChild(card);
    }
  }

  showHourlySkeleton() {
    this.hourlyContainer.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const card = document.createElement("div");
      card.className = "hourly-skeleton";
      card.innerHTML = `
        <div class="skeleton skeleton-text" style="width:60px;height:16px;margin-bottom:6px;"></div>
        <div class="skeleton skeleton-text" style="width:30px;height:16px;"></div>`;
      this.hourlyContainer.appendChild(card);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const skeleton = new WeatherSkeleton();
  skeleton.show();
});
