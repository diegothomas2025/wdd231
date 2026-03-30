import {membership} from '../data/membership.mjs'

console.log(membership)

// DOM
const membershipCards = document.querySelector('#membership-cards');
// DIALOG ELEMENTS
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#benefits-div');




myclose.addEventListener('click', () => mydialog.close());

// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayCards (data) {
    console.log(data)
    data.forEach(element => {
        
        const titleCard = document.createElement('h3');
        const infoBtn = document.createElement('button');
        const divCard = document.createElement('div')
        
        titleCard.textContent = element.title;
        infoBtn.textContent = 'Learn More'

        divCard.appendChild(titleCard)
        divCard.appendChild(infoBtn)
        membershipCards.appendChild(divCard);

        infoBtn.addEventListener('click', () => displayDialog(element));
    });
}

displayCards(membership)

const ul = document.createElement('ul');
function displayDialog (x) {

     mytitle.textContent = x.title
     ul.innerHTML = ''

    x.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit
        ul.appendChild(li)
    })
   
    myinfo.appendChild(ul)
    mydialog.showModal()
}

const timestampInput = document.querySelector('#timestamp');
timestampInput.value = new Date().toLocaleString();
