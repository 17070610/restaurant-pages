import './style.css';
import Background from './background1.jpg';

const content = document.getElementById('content');

const home = document.createElement('div');
home.classList.add('home');

const homeHead = document.createElement('h2');
homeHead.classList.add('restaurant-name');
homeHead.textContent = "FAME'S Restaurant";

const homeDescription = document.createElement('p');
homeDescription.classList.add('restaurant-description');
homeDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


home.appendChild(homeHead);
home.appendChild(homeDescription);
content.appendChild(home);