const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('cards');

async function getProphetDate() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}

getProphetDate();