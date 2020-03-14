const blocks = document.querySelectorAll('.block');
blocks.forEach((block, index) => {
  block.style.order = index;
});

blocks.forEach((block, index, arr) => {
  block.addEventListener('click', (event) => {
    event.target.style.order = 0;
    console.log(event.target.style.order);

    for (let i = 0; i < index; i++) {
      arr[i].style.order++;
    }
  });
})
  
console.log(blocks);