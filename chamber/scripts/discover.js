import {places} from '../data/places.mjs'
console.log(places)

const discoverContainer = document.querySelector('#discover-cards');

 function displayCards (data) {
    data.forEach(element => {

        const cards = document.createElement('div'); // CREATE ELEMENTS
        const title = document.createElement('h2');
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const address = document.createElement('address');
        const description = document.createElement('p');

        title.textContent = element.name; // TEXT CONTENT
        address.textContent = element.address;
        description.textContent = element.description;

        image.setAttribute('src', element.image); // ATTRIBUTES
        image.setAttribute('alt', element.description);

        cards.appendChild(title); // APPENDS
        figure.appendChild(image);
        cards.appendChild(figure);
        cards.appendChild(address);
        cards.appendChild(description);
        discoverContainer.appendChild(cards);
    });
 }

displayCards(places);

// LOCAL STORAGE
const message = document.querySelector('#message');
const now = Date.now()
// window.localStorage.setItem('time', today)

// const firstVisit = window.localStorage.getItem('time');
// window.localStorage.setItem('first', firstVisit)

// if (firstVisit < 1) {
//     message.textContent = `this is your first time`;
// } else {
//     message.textContent = `no funciona`;
// }
const lastVisit = localStorage.getItem('lastVisit');
console.log(lastVisit)

if (lastVisit === null) {
    message.textContent = `Welcome to `
}
localStorage.setItem("lastVisit", now);