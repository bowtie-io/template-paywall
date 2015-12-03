(function(){
  function registerSubscribers(){
    $("form.prospect-registration").submit(function(event){
      event.preventDefault();
      var email = $("input[name='prospect[email]']", this).val();

      bowtie.prospects.register(email).done(function(){
        $('.prospect-registration-pending', this).hide();
        $('.prospect-registration-successful', this).show();
      }.bind(this));
    });
  }

  $(registerSubscribers);
})();
