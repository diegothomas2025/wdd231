// use the date object to add the current year
const today = new Date();
document.querySelector('#currentyear').textContent = `© ${today.getFullYear()} 🐬 Thomas Gomez 🐬 Argentina`

// last modified
document.querySelector('#lastModified').innerHTML = `Last Modification: ${document.lastModified}`;



