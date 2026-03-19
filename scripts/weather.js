const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 49.75;
const lon = 6.64;
const apiKey = '51acc09c401af808d7a903d7e8d2fe35';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text());
        } 

        } catch (error) {
            console.log(error);
    }
}
apiFetch()

function displayResults (data) {
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentTemp.textContent = `${data.main.temp} C`;
    captionDesc.textContent = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description)

}