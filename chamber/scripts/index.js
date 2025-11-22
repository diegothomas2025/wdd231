const temp = document.querySelector("#temp");
const desc = document.querySelector("#description");
const icon = document.querySelector("#weather-icon");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const API_KEY = "51acc09c401af808d7a903d7e8d2fe35";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.88&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-34.60&lon=-58.88&units=metric&appid=${API_KEY}`;

async function getWeather() {
    try {
        const response = await fetch(url);  
        const data = await response.json();

        temp.textContent = `${data.main.temp.toFixed(1)}°C`;
        desc.textContent = data.weather[0].description;

        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        icon.setAttribute("src", iconSrc);
        icon.setAttribute("alt", data.weather[0].description);
    } catch (error) {
        console.error(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const forecastData = await response.json();

        // Tomamos 3 días a las 12:00pm
        const noonData = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

        day1.textContent = `${noonData[0].main.temp.toFixed(1)}°C`;
        day2.textContent = `${noonData[1].main.temp.toFixed(1)}°C`;
        day3.textContent = `${noonData[2].main.temp.toFixed(1)}°C`;

    } catch (error) {
        console.error(error);
    }
}

getWeather();
getForecast();

// SPOTLIGHTS
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json"); // Ajusta la ruta si es distinta
    const data = await response.json();

    // Filtrar miembros Gold (3) y Silver (2)
    const filtered = data.filter(member => member.membership === 2 || member.membership === 3);

    // Mezclar el array (shuffle)
    const shuffled = filtered.sort(() => Math.random() - 0.5);

    // Tomar 2 o 3 aleatorios
    const amount = Math.floor(Math.random() * 2) + 2; // 2 o 3
    const selected = shuffled.slice(0, amount);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = ""; // Limpia antes de cargar

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">Membership: ${member.membership === 3 ? "Gold" : "Silver"}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

loadSpotlights();
