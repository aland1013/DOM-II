const blocks = document.querySelectorAll('.block');

blocks.forEach((block, index) => {
  block.style.position = 'absolute';
  block.style.top = index * 150 + 'px';

  block.addEventListener('click', (event) => {
    event.target.remove();
    document.querySelector('.blocks').insertBefore(event.target, document.querySelector('.block'));

    document.querySelectorAll('.block').forEach((block, index) => {
      block.style.top = index * 150 + 'px';
    });
  });

  let intervalId;
  let pos = 0;

  block.addEventListener('mousedown', (event) => {
    intervalId = window.setInterval(() => {
      pos++;
      event.target.style.left = pos + 'px';
    }, 5); 
  });

  block.addEventListener('mouseup', () => {
    clearInterval(intervalId);
  });

  block.addEventListener('mouseout', () => {
    clearInterval(intervalId);
  })
});