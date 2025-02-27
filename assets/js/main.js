// for mobile sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu and body scroll on menu click
  document.querySelector('.mobile-menu').addEventListener('click', function() {
      document.querySelector('header').classList.toggle('show');
      document.body.classList.toggle('no-scroll');
  });

  // Close the sidebar if clicking outside of it
  document.addEventListener('click', function(event) {
      // Check if the click is outside the sidebar and the menu button
      if (!event.target.closest('header') && !event.target.closest('.mobile-menu')) {
          if (document.querySelector('header').classList.contains('show')) {
              document.querySelector('header').classList.remove('show');
              document.body.classList.remove('no-scroll');
          }
      }
  });

  // close via close btn
  document.querySelector('.close-sidebar-btn').addEventListener('click', ()=>{
      document.querySelector('header').classList.remove('show');
      document.body.classList.remove('no-scroll');
  })
});
