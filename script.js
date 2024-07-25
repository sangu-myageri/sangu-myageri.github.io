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
    $('.initials').addClass('site-color');
    $('.about-line-1').addClass('grey-text');
    $('#experience').css('background-color', '#121212').css('background-image', 'none');
    $('footer').css('background-color', '#3a3a3a').css('background-image', 'none');
    $('.hero-banner .cta-btn').addClass('black-text');
    $('.hero-banner .cta-btn').addClass('btn-hover');
    $('.project-card').addClass('black-bg').removeClass('site-color-bg');

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
    $('.initials').removeClass('site-color');
    $('.about-line-1').removeClass('grey-text');
    $('#experience').css('background-image', 'linear-gradient(90deg, #5318eb, #ab6ef9)');
    $('footer').css('background-image', 'linear-gradient(90deg, #5318eb, #ab6ef9)');
    $('.hero-banner .cta-btn').removeClass('black-text');
    $('.hero-banner .cta-btn').removeClass('btn-hover');
    $('.project-card').addClass('site-color-bg').removeClass('black-bg');
  }

  // // Check if dark mode is enabled in local storage
  // if (localStorage.getItem('darkMode') === 'enabled') {
  //   applyDarkMode();
  // }

  // // Dark mode toggle
  // $('#dark-mode-toggle').click(function (e) {
  //   e.preventDefault();
  //   if ($('body').hasClass('dark-mode')) {
  //     removeDarkMode();
  //     localStorage.setItem('darkMode', 'disabled');
  //   } else {
  //     applyDarkMode();
  //     localStorage.setItem('darkMode', 'enabled');
  //   }
  // });

  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

  if (darkModeEnabled) {
    applyDarkMode();
    $('.light-mode-image').hide();
  } else {
    removeDarkMode();
    $('.dark-mode-image').hide();
  }

  $('#dark-mode-toggle').click(function (e) {
    e.preventDefault();
    if ($('body').hasClass('dark-mode')) {
      removeDarkMode();
      localStorage.setItem('darkMode', 'disabled');
    } else {
      applyDarkMode();
      localStorage.setItem('darkMode', 'enabled');
    }
    $('.light-mode-image, .dark-mode-image').toggle();
    localStorage.setItem('darkMode', $('body').hasClass('dark-mode') ? 'enabled' : 'disabled');
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
