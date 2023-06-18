// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('parag')
paragraph.textContent = 'Hey i`m red!'
paragraph.style.cssText = "background-color: red;"

container.appendChild(paragraph)
container.appendChild(content);