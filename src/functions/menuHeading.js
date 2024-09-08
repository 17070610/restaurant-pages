import "../styles/menuHeadingStyles.css";
import headingSection from "./getHeadingMenuSection.js";
import { menuBlock } from "./menuBlock.js";


const menuHeading = document.createElement('h2');
menuHeading.classList.add('menu-heading');
menuHeading.textContent = "MENU";

headingSection.appendChild(menuHeading);
menuBlock.appendChild(headingSection);

export { menuBlock };