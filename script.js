$(document).ready(function () {

  // Dark mode toggle
  $('#dark-mode-toggle').click(function () {
    $('body').toggleClass('dark-mode');
    $('.navbar').toggleClass('dark-mode');
    $('.footer').toggleClass('dark-mode');
    $('.hero-banner').toggleClass('dark-mode');
    $('#about').toggleClass('grey-bg');
    $('#projects').toggleClass('grey-bg');
    $('.heading').toggleClass('white-text');
    // Add more elements to toggle dark mode as needed
  });

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
