const suggestionsEl = document.getElementById("suggestions");

const cities = ["New York", "London", "Tokyo", "Lagos", "Berlin"]

function showsuggestions(query){
    if(!query){
        suggestionsEl.style.display = "none";
        return;
    }


suggestionsEl.innerHTML = `<li><span>🔄 Search in progress...</span></li>`;
suggestionsEl.style.display="block";

setTimeout(() =>
{
    let matches = cities.filter(city => city.toLowerCase().includes(query.toLowerCase()));
    if (matches.length === 0) {
      suggestionsEl.innerHTML = `<li>No results found</li>`;
    } else {
      suggestionsEl.innerHTML = matches.map(city => `<li onclick="selectCity('${city}')">${city}</li>`).join("");
    }
}, 500);
}
function selectCity(city){
    document.querySelector(".search-bar").value = city;
    suggestionsEl.style.display = "none";
    
}