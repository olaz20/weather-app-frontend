document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  headerContainer.innerHTML = `
        <img src="assets/images/logo.svg" alt="logo" class="app-logo">
        
        <div class="dropdown">
          <button class="units">
            <img src="assets/images/icon-units.svg" alt="units" class="settings">
            <p>units</p>
            <img src="assets/images/icon-dropdown.svg" alt="icon-dropdown" class="dropdown-arrow">
          </button>

          <div class="dropdown-content">
            <p class="dropdown-title">Switch to Imperial</p>

            <div class="group">
              <p>Temperature</p>
              <ul>
                <li class="active"><span>Celsius (°C)</span> <img src="assets/images/icon-checkmark.svg" alt="active"></li>
                <li><span>Fahrenheit</span></li>
              </ul>
            </div>

            <div class="group">
              <p>Wind speed</p>
              <ul>
                <li class="active"><span>km/h</span> <img src="assets/images/icon-checkmark.svg" alt="active"></li>
                <li><span>mph</span></li>
              </ul>
            </div>

            <div class="group">
              <p>Precipitation</p>
              <ul>
                <li class="active"><span>Millimeters (mm)</span> <img src="assets/images/icon-checkmark.svg" alt="active"></li>
                <li><span>Inches (in)</span></li>
              </ul>
            </div>
          </div>
        </div>
  `;
});
