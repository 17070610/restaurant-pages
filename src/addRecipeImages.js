import './recipeImagesStyles.css';
import { menu } from "./createMenu.js";
import Recipe1 from './image1.webp';
import Recipe2 from './image2.webp';
import Recipe3 from './image3.webp';
import Recipe4 from './image4.webp';
import Recipe5 from './image5.webp';
import Recipe6 from './image6.webp';
import Recipe7 from './image7.webp';
import Recipe8 from './image8.webp';

const blocks = [];
const recipe = [];
const recipeImages = [Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6, Recipe7, Recipe8];

for (let i = 0; i < 8; i++) {
    blocks[i + 1] = document.querySelector(`.recipe-${i + 1}`);

    recipe[i + 1] = new Image();
    recipe[i + 1].src = recipeImages[i];
    recipe[i + 1].classList.add('image');

    blocks[i + 1].appendChild(recipe[i + 1]);
}

export { blocks };