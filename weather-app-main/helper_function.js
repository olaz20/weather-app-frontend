export function formatTemp(tempC) {
  return window.weatherUnits.temperature === "fahrenheit"
    ? Math.round(tempC * 9/5 + 32) + "°F"
    : Math.round(tempC) + "°C";
}

export function formatWind(kmh) {
  return window.weatherUnits.wind === "mph"
    ? Math.round(kmh / 1.609) + " mph"
    : Math.round(kmh) + " km/h";
}

export function formatPrecip(mm) {
  return window.weatherUnits.precipitation === "in"
    ? (mm / 25.4).toFixed(2) + " in"
    : mm + " mm";
}
