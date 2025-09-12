const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.units');

button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});


const dayButton  = document.getElementById('dayButton');
const dayMenu = document.getElementById('dayMenu');
const dayLabel = dayButton.querySelector('.day-label');

dayButton.addEventListener('click',() => {
    dayMenu.style.display = dayMenu.style.display === 'block' ? 'none' : 'block';  // if block, make none, else make block
})

document.querySelectorAll("#dayMenu li").forEach(item =>
{ 
    item.addEventListener('click', () => {
        dayLabel.textContent = item.dataset.day;
        dayMenu.style.display = 'none';
        // TODO: Update weather data based on selected day
    });
});


window.addEventListener('click', (event) => {
    if (!dayButton.contains(event.target) && !dayMenu.contains(event.target)){
        dayMenu.style.display = 'none';
    }
});