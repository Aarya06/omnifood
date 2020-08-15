$(document).ready(function(){
  var waypoint = new Waypoint({
    element: $('.js--features'),
    handler: function(direction) {
     if(direction == "down"){
       $('nav').addClass('sticky');
     }else {
      $('nav').removeClass('sticky');
     }
    },
    offset: 20 
  });

  $('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--plans').offset().top},1000)
  });

  $('.js--scroll-to-features').click(function(){
    $('html, body').animate({scrollTop: $('.js--features').offset().top},1000)
  });

  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


var waypoint1 = new Waypoint({
  element: $('.js--wp-1'),
  handler: function(direction) {
    $('.js--wp-1').addClass('animate__fadeIn')
  },
  offset: '50%'
})

var waypoint2 = new Waypoint({
  element: $('.js--wp-2'),
  handler: function(direction) {
    $('.js--wp-2').addClass('animate__fadeInUp')
  },
  offset: '50%'
})

var waypoint3 = new Waypoint({
  element: $('.js--wp-3'),
  handler: function(direction) {
    $('.js--wp-3').addClass('animate__fadeIn')
  },
  offset: '50%'
})

var waypoint4 = new Waypoint({
  element: $('.js--wp-4'),
  handler: function(direction) {
    $('.js--wp-4').addClass('animate__pulse')
  },
  offset: '50%'
})


$('.js--mobile-nav').click(function(){
  var nav = $('.js--nav-links');
  var icon = $('.js--mobile-nav i');

  nav.slideToggle(200);
  if(icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
})

});