import './style.css';
import { home } from './home.js';
import { menuHeading } from './menuHeading.js';
import { menu } from './createMenu.js';
import { blocks } from './addRecipeImages.js';
import { recipeNames } from './addRecipeNames.js';
import { parents } from './addOrderButton.js';
import { bookATableHeaderSection } from './bookATableHeadingSection.js';

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