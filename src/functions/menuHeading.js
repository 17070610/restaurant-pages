import "../styles/menuHeadingStyles.css";
import content from "./getContent.js";
import headingSection from "./getHeadingMenuSection.js";

const menuHeading = document.createElement('h2');
menuHeading.classList.add('menu-heading');
menuHeading.textContent = "MENU";

headingSection.appendChild(menuHeading);
content.appendChild(headingSection);

export { menuHeading };