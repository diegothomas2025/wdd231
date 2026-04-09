import { showNavigation } from './navigation.js';
showNavigation()

// DISPLAY PACKAGE CARDS
import { packages } from '../data/packages.mjs';
import { displayPackages } from './packages.js';
displayPackages(packages)

// DISPLAY TESTIMONIAL CARDS
import { getTestimonialData } from './testimonials.js';
getTestimonialData()

// DISPLAY SERVICE CARDS
import { getServiceData } from './services.js';
getServiceData()

const url = "https://diegothomas2025.github.io/wdd231/finalproject/data/jobs.json";
const jobsContainer = document.querySelector('#jobs-container');

async function getJobsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayJobs(data);
        } else {
            throw Error (await response.text())
        } 
    } catch (error) {
        console.log(error)
    }   
};
getJobsData()

function displayJobs(data) {

    data.forEach(element => {

        // CREATE ELEMENTS
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const image = document.createElement('img');
        const car = document.createElement('p');
        const duration = document.createElement('p');
        const location = document.createElement('p');
        
        // BUILD CARDS
        title.textContent = element.service;
        car.textContent = `Car: ${element.car}`;
        duration.textContent = `Duration: ${element.duration}`;
        location.textContent = `Location: ${element.location}`;

        // SET ATTRIBUTES
        image.setAttribute('src', element.image);
        image.setAttribute('alt', `${element.car} photo`);

        //APPEND CHILD ELEMENTS AND BUILD CARD STRUCTURES
        div.appendChild(title);
        div.appendChild(image);
        div.appendChild(car);
        div.appendChild(duration);
        div.appendChild(location);
        jobsContainer.appendChild(div);
    });
}