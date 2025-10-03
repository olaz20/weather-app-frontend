import { fetchWeatherData } from "./search.js";
window.addEventListener("load", () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            async(pos) => {
                const { latitude, longitude} = pos.coords;
               
                fetchWeatherData(latitude, longitude,"Your Location");
                
            },
            (err) => {
                fetchWeatherData(40.7128, -74.0060, "New York, USA");
            }
        ); } else {
            fetchWeatherData(40.7128, -74.0060, "New York, USA")
        }
            
        
    });
