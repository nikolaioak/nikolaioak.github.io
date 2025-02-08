let tinkeringTitle = document.getElementById('tinkering-title'),
    dateContainer = document.getElementById('date-container'),
    blurbContainer = document.getElementById('blurb-container'),
    picsContainer = document.getElementById('pics-container');

async function getTinkering() {
    const response = await fetch('https://nikolaimakes.beer/tinkering-data.json');
    const json = await response.json();
    return json.tinkeringData;
};

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let tinkeringId = params.tinkering;

getTinkering().then(tinkerings => {
    let blurbHTML =  '';
    let picsHTML = '';
    tinkerings.forEach(tinkering => {
        if (tinkering.id === tinkeringId) {
            tinkeringTitle.innerHTML =  tinkering.title;
            let tinkeringDt = new Date(Date.parse(tinkering.entryDate));
            let tinkeringDay = tinkeringDt.getDay();
            let tinkeringMon = tinkeringDt.toLocaleString('default', { month: 'short' });
            let tinkeringYr = tinkeringDt.getFullYear();
            dateContainer.innerHTML += `<h4>${tinkeringDay} ${tinkeringMon} ${tinkeringYr}</h4>`;
            tinkering.tinkeringBlurb.forEach(blurb => {
                blurbHTML += `<p>${blurb}</p>`;
            });

            tinkering.tinkeringPics.forEach(pic => {
                picsHTML += `<div class="tinkering-pic-item">
                                    <img src="${pic.imgPath}" alt="${pic.alt}"/>
                                    <p>${pic.subtitle}</p>
                            </div>`;
            });
            if (picsHTML === "") {
                picsHTML = "<p>Must not have happened...</p>";
            }
        }
    });
    blurbContainer.innerHTML += blurbHTML;
    picsContainer.innerHTML += picsHTML;
});

