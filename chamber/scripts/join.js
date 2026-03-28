import {membership} from '../data/membership.mjs'

console.log(membership)

// DOM
const membershipCards = document.querySelector('#membership-cards');
// DIALOG ELEMENTS
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

myclose.addEventListener('click', () => mydialog.close());

// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayCards (data) {
    console.log(data)
    data.forEach(element => {
        
        const titleCard = document.createElement('h3');
        const infoBtn = document.createElement('button');

        titleCard.textContent = element.title;
        infoBtn.textContent = 'Learn More'

        membershipCards.appendChild(titleCard)
        membershipCards.appendChild(infoBtn)

        infoBtn.addEventListener('click', () => displayDialog(element));
    });
}

displayCards(membership)

function displayDialog (x) {
    mytitle.textContent = x.title
    myinfo.textContent = x.benefits
    mydialog.showModal()
}
