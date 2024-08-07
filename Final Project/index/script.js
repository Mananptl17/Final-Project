$(document).ready(function() {
    // Toggle menu on hamburger icon click
    $('.ham').on('click', function() {
      $('.menu').slideToggle();
    });
  
    // Close menu on close icon click
    $('.close').on('click', function() {
      $('.menu').slideUp();
    });
  
    // Search input focus and blur events
    $('#input').on('focus', function() {
      $(this).parent().addClass('active');
    }).on('blur', function() {
      $(this).parent().removeClass('active');
    });
  
    // Social media links hover effect
    $('.social-media a').on('hover', function() {
      $(this).toggleClass('hover');
    });
  
    // Footer links hover effect
    $('.footer2 div div').on('hover', function() {
      $(this).toggleClass('hover');
    });
  
    // Scroll to top on footer click
    $('.footer3').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  
    // Image slider animation
    $('.img-slider').on('mouseover', function() {
      $(this).addClass('animated');
    }).on('mouseout', function() {
      $(this).removeClass('animated');
    });
  
    // Product hover effect
    $('.section2 .container .items').on('hover', function() {
      $(this).find('.img img').toggleClass('scale');
    });
  
    // Responsive menu toggle
    $(window).resize(function() {
      if ($(window).width() <= 1250) {
        $('.menu').hide();
        $('.heading1').show();
      } else {
        $('.menu').show();
        $('.heading1').hide();
      }
    });
  });