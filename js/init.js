(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Code By Webdevtrick ( https://webdevtrick.com )
// Review Loop
function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());

// Navigation

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

// Smooth Scrolling

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

//gallery//
// Code By Webdevtrick ( https://webdevtrick.com )
const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  // Reset the opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
