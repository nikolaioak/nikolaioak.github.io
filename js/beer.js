let beerContainer = document.getElementById('beer-container');
async function getBeers() {
    const response = await fetch('https://nikolaimakes.beer/beer-data.json');
    const json = await response.json();
    return json.beerData;
};

getBeers().then(beers => {
    let beerHTML = '';
    let beerUrl = new URL('https://nikolaimakes.beer/beer-details.html');
    beers.forEach(beer => {
        let beerDt = new Date(Date.parse(beer.startDate));
        let beerMon = beerDt.toLocaleString('default', { month: 'short' });
        let beerYr = beerDt.getFullYear();
        beerUrl.searchParams.set('beer', beer.id);
        beerHTML += `<div class="beer-item">
                        <a href="${beerUrl}">
                            <object data="./img/${beer.beerType.replace(/ /g, '')}.png" type="image/png">
                                <img src="./img/DefaultBeer.png" alt="${beer.name}"/>
                            </object>
                            <p>${beer.name}</p>
                        </a>
                        <p class="beer-date">${beerMon} ${beerYr}</p>
                    </div>`;
    });
    beerContainer.innerHTML += beerHTML;
});