let tinkeringContainer = document.getElementById('tinkering-container');
async function getTinkering() {
    const response = await fetch('https://nikolaimakes.beer/tinkering-data.json');
    const json = await response.json();
    return json.tinkeringData;
};

getTinkering().then(tinkerings => {
    let tinkeringHTML = '';
    let tinkeringUrl = new URL('https://nikolaimakes.beer/tinkering-details.html');
    let curYr;
    tinkerings.forEach(tinkering => {
        let tinkeringDt = new Date(Date.parse(tinkering.entryDate));
        let tinkeringDay = tinkeringDt.getDay();
        let tinkeringMon = tinkeringDt.toLocaleString('default', { month: 'short' });
        let tinkeringYr = tinkeringDt.getFullYear();
        if (tinkeringYr !== curYr) {
            // add new year spacer
            tinkeringHTML += `<p>${tinkeringYr}</p>`;
            curYr = tinkeringYr;
        }
        tinkeringUrl.searchParams.set('tinkering', tinkering.id);
        tinkeringHTML +=    `<div class="tinkering-item">
                                <a href="${tinkeringUrl}">
                                    <h4>${tinkeringDay} ${tinkeringMon} ${tinkeringYr} &bull; ${tinkering.title}</h4>
                                </a>
                            </div>`;
    });
    tinkeringContainer.innerHTML += tinkeringHTML;
});