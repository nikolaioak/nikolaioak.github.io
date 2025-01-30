let beerTitle = document.getElementById('beer-name'),
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
            let beerDt = new Date(Date.parse(beer.startDate));
            let beerMon = beerDt.toLocaleString('default', { month: 'short' });
            let beerYr = beerDt.getFullYear();
            statsHTML += `<table>
                            <tr>
                                <th>I made this...</th>
                                <th>Type</th>
                                <th>IBU</th>
                                <th>OG</th>
                                <th>SG</th>
                                <th>ABV</th>
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
                    ingredHTML  += `<table>`;
                }
                ingredHTML += `<tr>
                                <td>${ing.quantity}</td>
                                <td>${ing.uom}</td>
                                <td>${ing.name}</td>
                            </tr>`;
                if (idx == beer.ingredients.length) {
                    ingredHTML  += `</table>`;
                }
            });
            beer.beerBlurb.forEach(blurb => {
                blurbHTML += `<p>${blurb}</p><br>`;
            });
        }
    });
    beerTitle.innerHTML =  beerTitle;
    statsContainer.innerHTML += statsHTML;
    ingredContainer.innerHTML += ingredHTML;
    blurbContainer.innerHTML += blurbHTML;
});

