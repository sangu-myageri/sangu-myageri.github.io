$(document).ready(function () {
  var navbarBrand = $('.navbar-brand');
  var lastScrollTop = 0;
  var footerMenu = $('.navbar.fixed-bottom');

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    // Handle navbar brand and job role visibility
    if (scrollTop > 50) { // Adjust the scroll value to your preference
      navbarBrand.addClass('scrolled');
      $('.job-role').hide();
    } else {
      navbarBrand.removeClass('scrolled');
      $('.job-role').show();
    }

    // Handle footer menu visibility
    if (scrollTop > lastScrollTop) {
      footerMenu.addClass('hidden');
    } else {
      footerMenu.removeClass('hidden');
    }
    lastScrollTop = scrollTop;
  });
});
