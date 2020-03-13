// Change title to red on scroll
const title = document.querySelector('.nav-container h1');

window.addEventListener('scroll', () => {
  title.style.color = 'red';
});

// Change nav text color and background on hover
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.target.style.background = 'yellow';
  });
  link.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.target.style.background = 'white';
  });
});

// Make header image larger on hover
const headerImg = document.querySelector('.intro img');

headerImg.addEventListener('mouseenter', (event) => {
  event.target.style.transform = 'scale(1.2)';
  event.target.style.transition = 'all 0.3s';
});

headerImg.addEventListener('mouseleave', (event) => {
  event.target.style.transform = 'scale(1)';
});

// Change paragraph text color to pink when clicked
const pText = document.querySelectorAll('p');

pText.forEach(p => {
  p.addEventListener('click', (event) => {
    event.target.style.color = 'pink';
  });
});

// Change header font when double clicked
const headers = document.querySelectorAll('h2');

headers.forEach(header => {
  header.addEventListener('dblclick', (event) => {
    event.target.style.fontFamily = 'Arial Black';
  });
});

// Make body background color black while a key is pressed
const body = document.querySelector('body');

body.addEventListener('keydown', (event) => {
  event.target.style.background = 'black';
});

body.addEventListener('keyup', (event) => {
  event.target.style.background = 'white';
});

// Make the images change on resize

images = document.querySelectorAll('img');

window.addEventListener('resize', () => {
  images.forEach(img => {
    img.style.width = '50%';
  });
});