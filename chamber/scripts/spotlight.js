const memberUrl = "https://diegothomas2025.github.io/wdd231/chamber/data/members.json";
const spotlights = document.querySelector('#spotlights');

async function getMemberData() {
    try {
        const response = await fetch(memberUrl);
        if (response.ok) {
            const data = await response.json();
            const filtered = filterGoldSilver(data);
            const shuffled = filtered.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            displaySpotlights(selected)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getMemberData()

function filterGoldSilver (businesses) {
    return businesses.filter(business => business.membership === 3 || business.membership === 2);
}

function displaySpotlights (members) {
    members.forEach((member) => {

        const card = document.createElement('section');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const membership = document.createElement('p');

        name.textContent = `${member.name}`; // text content
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;

        website.setAttribute('href', member.website) // attributes
        website.setAttribute('target', '_blank')
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member.name} Logo`);
        image.setAttribute('width', '54')
        image.setAttribute('height', '54')

        card.appendChild(image); // appends
        card.appendChild(name); 
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        spotlights.appendChild(card);

        if (member.membership === 3) { // membership level
            card.classList.add('gold');
            membership.textContent = `Gold level membership`;
            membership.classList.add('membership-gold');
        } else {
            card.classList.add('silver');
            membership.textContent = `Silver level membership`;
            membership.classList.add('membership-silver');
        }
    })
}
