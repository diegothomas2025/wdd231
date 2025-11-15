const membersContainer = document.querySelector("#members-container");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);
    });
}

document.querySelector("#grid").addEventListener("click", () => {
    membersContainer.classList.remove("list");
    membersContainer.classList.add("grid");
});

document.querySelector("#list").addEventListener("click", () => {
    membersContainer.classList.remove("grid");
    membersContainer.classList.add("list");
});

getMembers();
