$(function(){
  if(bowtie.flash && (bowtie.flash.notice || bowtie.flash.alert)){
    $('#flash-message').show();

    if(bowtie.flash.notice){
      $('#flash-message .alert-notice').show();
      $('#flash-message .alert-notice .message').html(bowtie.flash.notice);
    }

    if(bowtie.flash.alert){
      $('#flash-message .alert-alert').show();
      $('#flash-message .alert-alert .message').html(bowtie.flash.alert);
    }
  }
});
