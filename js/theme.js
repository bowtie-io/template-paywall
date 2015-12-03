(function(){
  function initializeNavigationBar(){
    // Set height of navfix
    $('#nav').affix({
      offset: {
        top: 250,
      }
    });

    // Close collapse navbar
    $('.navbar-collapse a').click(function(){
      if($(window).width() < 767)
        $('.navbar-collapse').collapse('hide');
    });
  }

  $(initializeNavigationBar);
})();
