// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('parag')
paragraph.textContent = 'Hey i`m red!'
paragraph.style.cssText = "background-color: red;"

const h3 = document.createElement('h3');
h3.classList.add('eight3')
h3.textContent = 'Now I`m blue!'
h3.style.cssText = "background-color: blue;"

container.appendChild(paragraph)
container.appendChild(content);
container.appendChild(h3)

// button
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btntwo = document.querySelector('#btntwo');
btntwo.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
  

// const div = document.createElement('div');                     
// // creates a new div referenced in the variable 'div'

// div.style.color = 'blue';                                      
// // adds the indicated style rule

// div.style.cssText = 'color: blue; background: white;';          
// // adds several style rules

// div.setAttribute('style', 'color: blue; background: white;');    
// // adds several style rules

// div.setAttribute('id', 'theDiv');                              
// // if id exists, update it to 'theDiv', else create an id
// // with value "theDiv"

// div.getAttribute('id');                                        
// // returns value of specified attribute, in this case
// // "theDiv"

// div.removeAttribute('id');                                     
// // removes specified attribute

// div.classList.add('new');                                      
// // adds class "new" to your new div

// div.classList.remove('new');                                   
// // removes "new" class from div

// div.classList.toggle('active');                                
// // if div doesn't have class "active" then add it, or if
// // it does, then remove it

// div.textContent = 'Hello World!'                               
// // creates a text node containing "Hello World!" and
// // inserts it in div

// div.innerHTML = '<span>Hello World!</span>';                   
// // renders the HTML inside div