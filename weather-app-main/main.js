const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.units');

button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});