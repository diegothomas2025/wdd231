import {places} from '../data/places.mjs'

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
const lastVisit = localStorage.getItem('lastVisit');
const msToDays = 86400000;

if (lastVisit === null) {
    message.textContent = `Welcome! Let us know if you have any questions`;
} else {
    const timeDifference = now - lastVisit
    const daysDifference = Math.floor(timeDifference / msToDays)
    
    if (daysDifference < 1) {
        message.textContent = `Back so soon! Awesome!`;
    } else if (daysDifference === 1) {
        message.textContent = `Your last visited 1 day ago`;
    } else {
        message.textContent = `Your last visited ${daysDifference} days ago`
    }
    
}
localStorage.setItem("lastVisit", now);