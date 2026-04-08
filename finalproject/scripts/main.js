import { showNavigation } from './navigation.js';
showNavigation()
import { packages } from '../data/packages.mjs';
console.log(packages)

function displayPackages(packages) {

    const packagesContainer = document.querySelector('#packages-container');

    packages.forEach(element => {

        const divContainer = document.createElement('div'); // CREATE ELEMENTS 
        const nameSpan = document.createElement('span');
        const nameh2 = document.createElement('h2')
        const price = document.createElement('strong');
        const priceP = document.createElement('p');
        const servicesContainer = document.createElement('ul');
        const reserveButton = document.createElement('button');

        // NAME
        nameSpan.textContent = element.name // BUILD CARDS
        nameh2.textContent = `Fratt `;
        // PRICE
        price.textContent = element.price;
        priceP.textContent = `Desde `;
        // BUTTON
        reserveButton.textContent = `Reserva Ahora`;

        // SERVICES ARRAY
        element.services.forEach(service => { 
            const serviceLi = document.createElement('li');
            serviceLi.textContent = service;
            servicesContainer.appendChild(serviceLi)
        });

        // NAME
        nameh2.appendChild(nameSpan) // APPEND CHILD ELEMENTS
        divContainer.appendChild(nameh2);
        //PRICE
        priceP.appendChild(price)
        divContainer.appendChild(priceP);
        // SERVICES
        divContainer.appendChild(servicesContainer);
        // BUTTON
        divContainer.appendChild(reserveButton);
        // CONTAINER
        packagesContainer.appendChild(divContainer);

        reserveButton.addEventListener('click', () => displayDialog(element));
    });
};
displayPackages(packages)

function displayDialog(element) {
    // DIALOG ELEMENTS
    const dialogContainer = document.querySelector('#dialog-container');
    const dialogTitle = document.querySelector('#dialog-container h2');
    const closeBtn = document.querySelector('#dialog-container button');
    // const dialogContent = document.querySelector('#dialog-content');
    const prices = document.querySelector('#dialog-prices');
    const serviceList = document.querySelector('#dialog-services')
    const message = `Hola, quiero reservar el paquete Fratt ${element.name} `;
    const whatsappBtn = document.querySelector('#whatsapp-button');
    
    // BUILD CARD
    dialogTitle.textContent = `Fratt ${element.name}`;
    prices.textContent = `Desde ${element.price}`;
    serviceList.textContent = "";
    element.services.forEach(service => {
        
        const li = document.createElement('li');
        li.textContent = service;   
        serviceList.appendChild(li);
    });
    whatsappBtn.setAttribute('href', `https://wa.me/5491137663738?text=${encodeURIComponent(message)}`)

    closeBtn.addEventListener('click', () => dialogContainer.close());
    dialogContainer.showModal();
}