let  beerContainer = document.getElementById('beerContainer');
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
        beerUrl.searchParams.append('beer', beer.id);
        beerHTML += `<div class="beer-item"><a href="${beerUrl}"><img src="./img/nikolaimakesbeer-favicon.ico" alt="${beer.name}"/><h4>${beer.name}</h4></a><p>${beer.beerType} &bull; ${beerMon} ${beerYr}</p></div>`;
    });
    beerContainer.innerHTML += beerHTML;
});