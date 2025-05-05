var menu = document.querySelector('.burger-menu');
var navbar = document.querySelector('.menu__list');
var close_menu = document.querySelector('.menu__navigation')
var uncover_arrow = document.querySelectorAll('.arrow-down');
var process_block_description = document.querySelector('.process__block__description');
var prices = document.querySelector('.prices');

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
      var process_block_description = parentBlock.querySelector('.process__block__description');
      process_block_description.classList.toggle('active');
      arrow.classList.toggle('active');
      if(process_block_description.classList.contains('active') ) {
        const descriptionHeight = process_block_description.offsetHeight;
        parentBlock.style.marginBottom = `${descriptionHeight + 20}px`;
      } else {
        parentBlock.style.marginBottom = '0px';
      }

    });
  });
 

  if (prices) {
    var prices_block_label = prices.querySelector('.label__all__prices');
    var label_rolled_up = prices.querySelector('.label__rolled_up');
    var prices_block_firstcard = prices.querySelector('.price__card.first__card');
    var prices_block_thirdcard = prices.querySelector('.price__card.third__card');

    function toggleClasses() {
        prices_block_label?.classList.toggle('active');
        label_rolled_up?.classList.toggle('active');
        prices_block_firstcard?.classList.toggle('active');
        prices_block_thirdcard?.classList.toggle('active');
    }

    if (prices_block_label) {
        prices_block_label.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleClasses();
        });
    }

    if (label_rolled_up) {
        label_rolled_up.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleClasses();
        });
    }
}


