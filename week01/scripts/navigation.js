const navButton = document.querySelector('#ham-button');
const navLink = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLink.classList.toggle('show');
});