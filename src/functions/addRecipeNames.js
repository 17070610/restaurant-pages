import '../styles/recipeNamesStyles.css';
import { menu } from "./createMenu.js";

const recipeNames = ["Coconut Lime Chicken Recipe", "Parmesan Espresso Martin Steak Recipe", "Crockpot Macaroni and Cheese Recipe", "Tuscan Butter Shrimp Recipe", "Pork Chile Verde Recipe", "Lemon Asparagus and Chicken Pasta Recipe", "Creamy Chicken Fajita Pasta Recipe", "Zucchini and Asparagus Orzo Risotto Recipe"];

recipeNames.forEach((recipeName, index) => {

    const foodName = document.createElement('h3');
    foodName.classList.add('recipe-name');
    foodName.textContent = recipeName;

    const recipe = document.querySelector(`.recipe-${index + 1}`);

    recipe.appendChild(foodName);
});

export { recipeNames };