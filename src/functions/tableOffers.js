import content from "./getContent.js";

const tableOffers = document.createElement('div');
tableOffers.classList.add('table-offers');

for (let i = 0; i < 4; i++)
{
    const offers = document.createElement('div');
    offers.className = 'offer-'+ (i + 1);
    offers.classList.add('offers');

    tableOffers.appendChild(offers);
}

content.appendChild(tableOffers);

export { tableOffers }