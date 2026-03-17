const url = "https://diegothomas2025.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector('#cards');

/*
    Async Function
*/
const getMemberData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data)
    displayMemberData(data)
    
}
getMemberData();

const displayMemberData = (members) => {
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
        cards.appendChild(card);

        if (member.membership === 3) { // membership level
            card.classList.add('gold');
            membership.textContent = `Gold level membership`
            membership.classList.add('membership-gold')
        } else if (member.membership === 2) {
            card.classList.add('silver')
            membership.textContent = `Silver level membership`
            membership.classList.add('membership-silver')
        } else {
            card.classList.add('member')
            membership.textContent = `Member`
            membership.classList.add('membership-member')
        }
    })
}

// Grid / List Buttons
const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');

function showGrid() {
    cards.classList.add('grid');
    cards.classList.remove('list');
}
function showList() {
    cards.classList.add('list');
    cards.classList.remove('grid');
}

gridButton.addEventListener('click', showGrid);
listButton.addEventListener('click', showList);