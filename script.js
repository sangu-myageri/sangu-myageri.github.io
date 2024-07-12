$(document).ready(function () {

  // Function to apply dark mode
  function applyDarkMode() {
    $('body').addClass('dark-mode');
    $('.navbar').addClass('dark-mode');
    $('.footer').addClass('dark-mode');
    $('.hero-banner').addClass('dark-mode');
    $('#about').addClass('grey-bg');
    $('#projects').addClass('grey-bg');
    $('.heading').addClass('white-text');
    $('.footer p').addClass('white-text');
    $('.initials').addClass('site-color');
    $('.about-line-1').addClass('grey-text');
    $('.hero-banner .cta-btn').addClass('black-text');
    $('.hero-banner .cta-btn').addClass('btn-hover');
    
  }

  // Function to remove dark mode
  function removeDarkMode() {
    $('body').removeClass('dark-mode');
    $('.navbar').removeClass('dark-mode');
    $('.footer').removeClass('dark-mode');
    $('.hero-banner').removeClass('dark-mode');
    $('#about').removeClass('grey-bg');
    $('#projects').removeClass('grey-bg');
    $('.heading').removeClass('white-text');
    $('.footer p').removeClass('white-text');
    $('.initials').removeClass('site-color');
    $('.about-line-1').removeClass('grey-text');
    $('.hero-banner .cta-btn').removeClass('black-text');
    $('.hero-banner .cta-btn').removeClass('btn-hover');
  }

  // Check if dark mode is enabled in local storage
  if (localStorage.getItem('darkMode') === 'enabled') {
    applyDarkMode();
  }

  // Dark mode toggle
  $('#dark-mode-toggle').click(function () {
    if ($('body').hasClass('dark-mode')) {
      removeDarkMode();
      localStorage.setItem('darkMode', 'disabled');
    } else {
      applyDarkMode();
      localStorage.setItem('darkMode', 'enabled');
    }
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
