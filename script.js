$(document).ready(function() {
  var navbarBrand = $('.navbar-brand');

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) { // Adjust the scroll value to your preference
      navbarBrand.addClass('scrolled');
      $('.job-role').hide();
    } else {
      navbarBrand.removeClass('scrolled');
      $('.job-role').show();
    }
  });

  $('#navbarSideCollapse').on('click', function() {
    $('.offcanvas-collapse').toggleClass('open');
  });
});
