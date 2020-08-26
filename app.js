$(function () {
  
  let header = $('#header');
  let intro = $('#intro');
  let introHeight = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let navToggle = $('#navToggle');
  let nav = $('#nav');
  
/* Fixed header */
  checkScroll(introHeight, scrollPos);

  $(window).on('load resize scroll', function () {
    introHeight = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(introHeight, scrollPos);
  });

  function checkScroll(introHeight, scrollPos) {
    if (scrollPos > introHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

/* Smooth scroll */
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate({
      scrollTop: elementOffset - 65
    });

    nav.removeClass('show');
  });

/* Nav toggle */
  navToggle.on('click', function () {
    nav.toggleClass('show');   
  });
});
