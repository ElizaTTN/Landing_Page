var menu = document.querySelector('.burger-menu');
var navbar = document.querySelector('.menu__list');
var close_menu = document.querySelector('.menu__navigation')

menu.addEventListener('click', function() {
    navbar.classList.add('active');
  })
  
  close_menu.addEventListener('click', function(event) {
    event.stopPropagation(); 
    navbar.classList.remove('active');
  });