const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `©${today.getFullYear()} | Thomas Gomez | Argentina`; 

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`