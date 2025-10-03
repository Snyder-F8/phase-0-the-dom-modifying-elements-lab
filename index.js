// 1. Remove the <main id="main"> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set its id
newHeader.id = 'victory';

// 4. Set its inner text (replace YOUR-NAME with your name)
newHeader.textContent = 'Sereluna is the champion';

// 5. Append the new <h1> to the body
document.body.appendChild(newHeader);
