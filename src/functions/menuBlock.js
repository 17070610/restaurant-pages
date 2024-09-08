import content from "./getContent.js";

const menuBlock = document.createElement('div');
menuBlock.classList.add("menu-block");

content.appendChild(menuBlock);

export { menuBlock }