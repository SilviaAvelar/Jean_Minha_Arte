jQuery(document).ready(function($){




	/************** Scroll Navigation *********************/
	$('.navigation').singlePageNav({
        currentClass : 'active'
    });


	/************** FlexSlider *********************/
    $('.flexslider').flexslider({
	    animation: "fade",
	    directionNav: false
	});


    /************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
    });

});

// Seleciona o elemento com a classe "logo"
const logo = document.querySelector('.logo');

// Adiciona um ouvinte de evento para detectar o fim da animação
logo.addEventListener('animationend', () => {
    logo.classList.add('rotate-complete'); // Adiciona a classe "rotate-complete"
});