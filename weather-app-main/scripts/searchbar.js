// scripts/searchbar.js
document.addEventListener("DOMContentLoaded", () => {
  const searchContainer = document.getElementById("search-container");

  if (!searchContainer) return;

  searchContainer.innerHTML = `
      <div class="search-wrapper">
        <input id="searchInput" 
               class="search-bar" 
               type="text" 
               placeholder="  Search for a city, e.g., New York">
        <ul class="suggestions-list" id="suggestions"></ul>
      </div>
      <button class="submit-bar" type="submit">Search</button>
  `;
});
