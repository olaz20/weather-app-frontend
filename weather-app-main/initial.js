import { fetchWeatherData } from "./search.js";
import { WeatherSkeleton } from "./loading.js";
window.addEventListener("load", () => {
    const skeleton = new WeatherSkeleton();
    skeleton.show();
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            async(pos) => {
                const { latitude, longitude} = pos.coords;
               
                fetchWeatherData(latitude, longitude,"Your Location");
                
            },
            (err) => {
                skeleton.show();
            }
        ); } else {
            skeleton.show();
        }
            
        
    });
