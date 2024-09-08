import '../styles/orderButtonStyles.css';
import { menuBlock } from './addRecipeNames.js';

const parents = document.querySelectorAll('.recipes');

document.addEventListener("DOMContentLoaded", function() {

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

export { menuBlock };
