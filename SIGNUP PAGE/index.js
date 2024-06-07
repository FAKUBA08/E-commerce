const liItems = document.querySelectorAll('.menus ul li');

liItems.forEach(li => {
  li.addEventListener('click', function() {

    liItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});



