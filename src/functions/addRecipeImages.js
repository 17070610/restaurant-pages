import '../styles/recipeImagesStyles.css';
import { menuBlock } from "./createMenu.js";
import Recipe1 from '../assets/image1.webp';
import Recipe2 from '../assets/image2.webp';
import Recipe3 from '../assets/image3.webp';
import Recipe4 from '../assets/image4.webp';
import Recipe5 from '../assets/image5.webp';
import Recipe6 from '../assets/image6.webp';
import Recipe7 from '../assets/image7.webp';
import Recipe8 from '../assets/image8.webp';


const recipeImages = [Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6, Recipe7, Recipe8];

recipeImages.forEach((recipeImage, index) => {
    const block = document.querySelector(`.recipe-${index + 1}`);
    if (block) {
        const imgElement = new Image();
        imgElement.src = recipeImage;
        imgElement.classList.add('image');

        block.appendChild(imgElement);
    }
})

export { menuBlock };