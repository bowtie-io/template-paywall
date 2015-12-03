(function(){
  function attachSmoothScrollHandlers(){
    if (($(window).height() + 100) < $(document).height()) {
      $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
      });
    }

    $('a[href*=#]:not([href=#])').click(function() {
      if($.data(this, '_smoothscroll')){ return; }
      $.data(this, '_smoothscroll', true);

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }

  $(attachSmoothScrollHandlers);
})();
