import { showNavigation } from './navigation.js';
showNavigation()

import { packages } from '../data/packages.mjs';
import { displayPackages } from './packages.js';
displayPackages(packages)

import { getTestimonialData } from './testimonials.js';
getTestimonialData()

const url = "https://diegothomas2025.github.io/wdd231/finalproject/data/services.json"
const servicesContainer = document.querySelector('#services-container');

async function getServiceData() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayServices(data)
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
};
getServiceData()

function displayServices(data) {

    if (!servicesContainer) return;

    data.forEach(element => {

        // CREATE ELEMENTS
        const cardContainer = document.createElement('div');
        const serviceTitle = document.createElement('h2');
        const price = document.createElement('p');
        const duration = document.createElement('p');
        const description = document.createElement('p');
        const reserveButton = document.createElement('button');

        // BUILD CARD
        serviceTitle.textContent = element.name;
        price.textContent = `Price: ${element.price}`;
        duration.textContent = `Duration: ${element.duration}`;
        description.textContent = `Description: ${element.description}`;
        reserveButton.textContent = "Reservar Ahora";

        // APPEND CHILD ELEMENTS AND CARD STRUCTURE
        cardContainer.appendChild(serviceTitle);
        cardContainer.appendChild(price);
        cardContainer.appendChild(duration);
        cardContainer.appendChild(description);
        cardContainer.appendChild(reserveButton);

        servicesContainer.appendChild(cardContainer);
    });

}
