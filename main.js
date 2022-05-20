// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newPara = document.createElement('p');
newHeading.textContent = 'Article 004';
newPara.textContent = 'The nenjakd jkoonf jnjdia kjikaojcp';

newArticle.appendChild(newHeading);
newArticle.appendChild(newPara);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');

newArticle.setAttribute('id', 'art-004');   

let main = document.querySelector('main');
main.appendChild(newArticle



/*  Replacing and removing elements
DOM elements also have methods allowing 
their replacement and/or removal:  replaceChild() 
 and  removeChild() .  Both methods call on the
 parent of the element you wish to remove, but you
 can cheat a bit and use  
 myElement.parentElement.removeChild(myElement)  for example.*/
                         