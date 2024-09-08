import './style.css';
import { home } from './pages/homepage.js';
import { menuBlock } from './functions/addOrderButton.js';

const content = document.getElementById('content');

function renderPage(page) {
    content.innerHTML = '';
    content.appendChild(page);
};

document.getElementById('home').addEventListener('click', () => {
    document.querySelector('nav').classList.remove("nav-menu")
    renderPage(home);
});

document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('nav').classList.add("nav-menu")
    renderPage(menuBlock);
})

window.onload = () => {
    renderPage(home);
};