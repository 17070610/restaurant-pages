import './style.css';
import Background from './background1.jpg';

const content = document.getElementById('content')
function welcome() {
    const welcomeEl = document.createElement('div');
    welcomeEl.classList.add('welcome');

    const myBackgound = new Image();
    myBackgound.src = Background;

    welcomeEl.appendChild(myBackgound);

    return welcomeEl;
}

document.body.appendChild(welcome());