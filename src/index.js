import './style.css';
import { home } from './pages/homepage.js';

const content = document.getElementById('content');

function renderPage(page) {
    content.innerHTML = '';
    content.appendChild(page);
};

document.getElementById('home').addEventListener('click', () => {
    renderPage(home);
});

window.onload = () => {
    renderPage(home);
};