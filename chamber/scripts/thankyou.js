const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Membership Aplication for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your Email: ${myInfo.get('email')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Business/Organization's name: ${myInfo.get('organization-name')}</p>
<p><strong>Date and time sent:</strong> ${myInfo.get('timestamp')}</p>
`