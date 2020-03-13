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

