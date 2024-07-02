$(document).ready(function () {
  var navbarBrand = $('.navbar-brand');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) { // Adjust the scroll value to your preference
      navbarBrand.addClass('scrolled');
      $('.job-role').hide();
    } else {
      navbarBrand.removeClass('scrolled');
      $('.job-role').show();
    }
  });
  // var previousScroll = 0;
  // var navbar = $('.navbar');

  // $(window).on('scroll', function () {
  //   var currentScroll = $(this).scrollTop();
  //   if (currentScroll > previousScroll) {
  //     // Scrolling down
  //     navbar.addClass('navbar-hidden');
  //   } else {
  //     // Scrolling up
  //     navbar.removeClass('navbar-hidden');
  //   }
  //   previousScroll = currentScroll;
  // });

  $('#navbarSideCollapse').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });
});

