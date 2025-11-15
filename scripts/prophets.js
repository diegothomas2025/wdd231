const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthday = document.createElement('span');
        let place = document.createElement('span');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthday.innerHTML = `Date of Birth: ${prophet.birthdate} <br>`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrair of ${prophet.name} Latter-day Prophet`);
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}