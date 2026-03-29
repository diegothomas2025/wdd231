const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

document.querySelector('#results').innerHTML = `
<p>${myInfo.get('first')}</p>

`