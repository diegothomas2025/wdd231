document.getElementById('timestamp').value = new Date().toISOString();

const openButtonNp = document.querySelector("#openButtonNp");
const openButtonBronze = document.querySelector("#openButtonBronze");
const openButtonSilver = document.querySelector("#openButtonSilver");
const openButtonGold = document.querySelector("#openButtonGold");
const closeButton = document.querySelector("#closeButton");
const dialogBox = document.querySelector("#dialogBox")
const dialogBoxText = document.querySelector("#dialogBoxText")

openButtonNp.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h2>NP Membership Benefits</h2>
    <p>No fee. Includes basic directory listing.</p>`
});

openButtonBronze.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h2>Bronze Benefits</h2>
    <p>Includes event access and newsletter promotion.</p>`
});

openButtonSilver.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h2>Silver Benefits</h2>
    <p>Includes directory highlight and discounted events.</p>`
});

openButtonGold.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h2>Gold Benefits</h2>
    <p>Premiun advertising + top homepage placement.</p>`
});


closeButton.addEventListener('click', () => {
    dialogBox.close();
});
