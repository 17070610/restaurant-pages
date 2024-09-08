import '../styles/menuStyles.css';
import { menuBlock } from './menuBlock';

const menu = document.createElement('div');
menu.classList.add('menu');

for (let i = 0; i < 8; i++)
{
    const recipes = document.createElement('div');
    recipes.className = 'recipe-'+ (i + 1);
    recipes.classList.add('recipes');
    
    menu.appendChild(recipes);
}

menuBlock.appendChild(menu);

export { menuBlock };