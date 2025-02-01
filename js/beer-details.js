let beerTitle = document.getElementById('beer-name'),
    beerIcon = document.getElementById('beer-icon'),
    statsContainer = document.getElementById('stats-container'),
    ingredContainer = document.getElementById('ingredients-container'),
    blurbContainer = document.getElementById('blurb-container');

async function getBeers() {
    const response = await fetch('https://nikolaimakes.beer/beer-data.json');
    const json = await response.json();
    return json.beerData;
};

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let beerId = params.beer;

getBeers().then(beers => {
    let statsHTML = '';
    let ingredHTML = '';
    let blurbHTML =  '';
    beers.forEach(beer => {
        if (beer.id === beerId) {
            beerTitle.innerHTML =  beer.name;
            beerIcon.innerHTML = `<object data="./img/${beer.beerType.replace(/ /g, '')}.png" type="image/png">
                                    <img src="./img/DefaultBeer.png" alt="${beer.name}"/>
                                </object>`;
            let beerDt = new Date(Date.parse(beer.startDate));
            let beerMon = beerDt.toLocaleString('default', { month: 'short' });
            let beerYr = beerDt.getFullYear();
            statsHTML += `<table class="stats-table">
                            <tr>
                                <th class="made-head">I made this...</th>
                                <th class="type-head">Type</th>
                                <th class="data-head">IBU</th>
                                <th class="data-head">OG</th>
                                <th class="data-head">SG</th>
                                <th class="data-head">ABV</th>
                            </tr>
                            <tr>
                                <td>${beerMon} ${beerYr}</td>
                                <td>${beer.beerType}</td>
                                <td>${beer.ibu}</td>
                                <td>${beer.originalGravity}</td>
                                <td>${beer.specificGravity}</td>
                                <td>${Math.round(((beer.originalGravity - beer.specificGravity)*131.25)*10)/10} %</td>
                            </tr>
                        </table>`;
            beer.ingredients.forEach((ing, idx) => {
                if (idx == 0) {
                    ingredHTML  += `<table class="ingred-table"`;
                }
                ingredHTML += `<tr>
                                <td class="ingred-qty">${ing.quantity}</td>
                                <td class="ingred-uom">${ing.uom}</td>
                                <td>${ing.name}</td>
                            </tr>`;
                if (idx == beer.ingredients.length) {
                    ingredHTML  += `</table>`;
                }
            });
            beer.beerBlurb.forEach(blurb => {
                blurbHTML += `<p>${blurb}</p>`;
            });
        }
    });
    statsContainer.innerHTML += statsHTML;
    ingredContainer.innerHTML += ingredHTML;
    blurbContainer.innerHTML += blurbHTML;
});

