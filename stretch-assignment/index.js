const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => {
  block.addEventListener('click', (event) => {
    event.target.remove();
    document.querySelector('.blocks').insertBefore(event.target, document.querySelector('.block'));
  });
  Draggable.create(block, {
      type: 'x',
      lockAxis: true
    });
});