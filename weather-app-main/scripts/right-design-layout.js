document.addEventListener("DOMContentLoaded", () => {
  const rightDesignContainer = document.getElementById("right-design");

  if (!rightDesignContainer) return;

  rightDesignContainer.innerHTML = `
    <div class="right-design">
      <div class="card-sub-title">
        <h3>Hourly Forecast</h3>
        <div class="day-dropdow">
          <button id="dayButton">
            <p class="day-label">Select Day</p>
            <img src="assets/images/icon-dropdown.svg" alt="dropdown icon">
            <ul id="dayMenu" class="dropdown-menu">
              <li data-day="Monday">Monday</li>
              <li data-day="Tuesday">Tuesday</li>
              <li data-day="Wednesday">Wednesday</li>
              <li data-day="Thursday">Thursday</li>
              <li data-day="Friday">Friday</li>
              <li data-day="Saturday">Saturday</li>
              <li data-day="Sunday">Sunday</li>
            </ul>
          </button>
        </div>
      </div>

      <div class="forecast-container" id="hourly-forecast"></div>
    </div>
  `;
});

