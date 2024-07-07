import './style.css';
import Background from './background1.jpg';
import Recipe1 from './image1.webp';
import Recipe2 from './image2.webp';
import Recipe3 from './image3.webp';
import Recipe4 from './image4.webp';
import Recipe5 from './image5.webp';
import Recipe6 from './image6.webp';
import Recipe7 from './image7.webp';
import Recipe8 from './image8.webp';

const content = document.getElementById('content');

const home = document.createElement('div');
home.classList.add('home');

const homeHead = document.createElement('h2');
homeHead.classList.add('restaurant-name');
homeHead.textContent = "FAME'S Restaurant";

const homeDescription = document.createElement('p');
homeDescription.classList.add('restaurant-description');
homeDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const menu = document.createElement('div');
menu.classList.add('menu');

for (let i = 0; i < 8; i++)
{
    const recipes = document.createElement('div');
    recipes.className = 'recipe-'+ (i + 1);
    recipes.classList.add('recipes');

    menu.appendChild(recipes);
}

home.appendChild(homeHead);
home.appendChild(homeDescription);
content.appendChild(home);
content.appendChild(menu);

const block1 = document.querySelector('.recipe-1');
const block2 = document.querySelector('.recipe-2');
const block3 = document.querySelector('.recipe-3');
const block4 = document.querySelector('.recipe-4');
const block5 = document.querySelector('.recipe-5');
const block6 = document.querySelector('.recipe-6');
const block7 = document.querySelector('.recipe-7');
const block8 = document.querySelector('.recipe-8');

const recipe1 = new Image();
recipe1.src = Recipe1;
recipe1.classList.add('image');

const recipe2 = new Image();
recipe2.src = Recipe2;
recipe2.classList.add('image');

const recipe3 = new Image();
recipe3.src = Recipe3;
recipe3.classList.add('image');

const recipe4 = new Image();
recipe4.src = Recipe4;
recipe4.classList.add('image');

const recipe5 = new Image();
recipe5.src = Recipe5;
recipe5.classList.add('image');

const recipe6 = new Image();
recipe6.src = Recipe6;
recipe6.classList.add('image');

const recipe7 = new Image();
recipe7.src = Recipe7;
recipe7.classList.add('image');

const recipe8 = new Image();
recipe8.src = Recipe8;
recipe8.classList.add('image');

block1.appendChild(recipe1);
block2.appendChild(recipe2);
block3.appendChild(recipe3);
block4.appendChild(recipe4);
block5.appendChild(recipe5);
block6.appendChild(recipe6);
block7.appendChild(recipe7);
block8.appendChild(recipe8);

const recipeNames = ["Coconut Lime Chicken Recipe", "Parmesan Espresso Martin Steak Recipe", "Crockpot Macaroni and Cheese Recipe", "Tuscan Butter Shrimp Recipe", "Pork Chile Verde Recipe", "Lemon Asparagus and Chicken Pasta Recipe", "Creamy Chicken Fajita Pasta Recipe", "Zucchini and Asparagus Orzo Risotto Recipe"];

recipeNames.forEach((recipeName, index) => {

    const foodName = document.createElement('h3');
    foodName.classList.add('recipe-name');
    foodName.textContent = recipeName;

    const recipe = document.querySelector(`.recipe-${index + 1}`);

    recipe.appendChild(foodName);
});

document.addEventListener("DOMContentLoaded", function() {
    const parents = document.querySelectorAll('.recipes');

    parents.forEach(parent => {
        const orderSection = document.createElement('div');
        orderSection.classList.add('order-section');

        const orderButton = document.createElement('button');
        orderButton.classList.add('order-button');
        orderButton.textContent = "Order";

        orderSection.appendChild(orderButton);

        parent.appendChild(orderSection);
    });
});