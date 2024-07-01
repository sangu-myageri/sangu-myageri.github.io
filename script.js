// offcanvas-navbar js
  (() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

// $(document).ready(function() {
//   $('.project-card').hover(
//     function() {
//       $(this).find('.project-img').css('transform', 'translateY(calc(200px - 100%))');
//     },
//     function() {
//       $(this).find('.project-img').css('transform', 'translateY(0)');
//     }
//   );
// });


