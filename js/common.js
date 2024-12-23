/**
 * https://wicoope.github.io/shotbreaks/
 * v0.1-modified | 20181006
 * License: WiCoope
 */
 
$(window).on("load", function() {
  /**
   * Toggle Nav Bar
   */
  $(".toggle").on("click", function() {
    if ($(this).hasClass("toggle--open")) {
      $(this).removeClass("toggle--open");
      $(".nav").addClass("nav--close").removeClass("nav--open");
      $(".nav__item").addClass("nav__item--fade-out").removeClass("nav__item--fade-in");
    } else {
      $(this).addClass("toggle--open");
      $(".nav").addClass("nav--open").removeClass("nav--close");
      $(".nav__item").addClass("nav__item--fade-in").removeClass("nav__item--fade-out");
    }
  });

  /**
   * Listen scroll event and change nav color
   */
  if ($(".toggle__bar").hasClass("toggle__bar--white")) {
    $(window).scroll(function(){
      if($(this).scrollTop() > ($(".banner").height() / 4 * 3.5)) {
        $(".toggle__bar").removeClass("toggle__bar--white");
        $(".language>a").removeClass("language--white");
      } else {
        $(".toggle__bar").addClass("toggle__bar--white");
        $(".language>a").addClass("language--white");
      }
    });
  }

  /**
   * Loading icon
   */
  $(".loading__icon").fadeOut(1500);
  $(".loading__block").addClass("hide").delay(1500).fadeOut(500);

  $(".arrow--down").on("click", function() {
    $("html, body").animate({
      scrollTop: $(window).height()
    }, 500);
  });

  /**
   * Scroll Page
   */
  $.scrollIt({
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 600,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: 0            // offste (in px) for fixed top navigation
  });

  /**
   * Stellar
   */
  $(window).stellar({ horizontalScrolling: false });
});