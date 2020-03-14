const blocks = document.querySelectorAll('.block');
blocks.forEach((block, index, arr) => {
  block.style.order = index;
  block.addEventListener('click', (event) => {
    event.target.style.order = 0;
    for (let i = 0; i < index; i++) {
      arr[i].style.order++;
    }
  });
});