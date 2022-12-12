// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Taco Tray</h1>`;

let tray = document.createElement('section');
tray.id = 'tray';
appDiv.appendChild(tray);

/**
 * Help our chef fill a tray with tacos!
 *
 * Make a function return an array that contains between one and ten taco emojis 🌮.
 * Use the following JavaScript concepts:
 *    - Math.random()
 *    - Math.floor()
 *    - new Array()
 *    - Array.fill()
 *
 */

function getRandomNumberOfTacos() {
  let rIdx = Math.floor(Math.random() * 10 + 1);
  let tacoArr = new Array(rIdx);
  return tacoArr.fill('🌮');
  // return ['Empty Tray']; // replace this empty tray array
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join('');
}

document.getElementById('tray').innerHTML = putTacosOnTray();
