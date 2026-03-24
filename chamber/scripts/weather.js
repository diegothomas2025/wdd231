
// CURRENT WEATHER DOM
currentTemp = document.querySelector('#current-temp');
weatherIcon = document.querySelector('#weather-icon');
captionDesc = document.querySelector('#caption-desc');

// FORECAST DOM
day1 = document.querySelector('#day-1');
day2 = document.querySelector('#day-2');
day3 = document.querySelector('#day-3');

// API WEATHER DATA
const lat = -34.60;
const lon = -58.94;
const apiKey = '51acc09c401af808d7a903d7e8d2fe35';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }    
    } catch (error) {
        console.log(error);
    }
}
getWeather()

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }    
    } catch (error) {
        console.log(error);
    }
}
getForecast()

function displayResults (data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;
    captionDesc.textContent = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

function displayForecast (data) {
    day1.textContent = `Day 1: ${data.list[4].main.temp.toFixed(1)}°C`;
    day2.textContent = `Day 2: ${data.list[12].main.temp.toFixed(1)}°C`;
    day3.textContent = `Day 3: ${data.list[20].main.temp.toFixed(1)}°C`;
}

