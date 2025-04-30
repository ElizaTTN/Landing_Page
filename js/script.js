var menu = document.querySelector('.burger-menu');
var navbar = document.querySelector('.menu__list');
var close_menu = document.querySelector('.menu__navigation')
var uncover_arrow = document.querySelectorAll('.arrow-down');
var description = document.querySelector('.process__block__description');

menu.addEventListener('click', function() {
    navbar.classList.add('active');
  })
  
  close_menu.addEventListener('click', function(event) {
    event.stopPropagation(); 
    navbar.classList.remove('active');
  });

  uncover_arrow.forEach(arrow => {
    arrow.addEventListener('click', (event) => {
      var parentBlock = arrow.closest('.process__block');
      var description = parentBlock.querySelector('.process__block__description');
      description.classList.toggle('active');
      arrow.classList.toggle('active');
      if(description.classList.contains('active') ) {
        const descriptionHeight = description.offsetHeight;
        parentBlock.style.marginBottom = `${descriptionHeight + 20}px`;
      } else {
        parentBlock.style.marginBottom = '0px';
      }

    });
  });
 