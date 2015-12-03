$(function(){
  bowtie.user.profile(function(profile){
    if(profile.avatar){
      $("#avatar").src = profile.avatar.url;
    }
  });

  $("#avatar-upload").on("change", function(){
    var file = this.files[0];

    // Update the current avatar preview
    if(file){
       var fr = new FileReader();
       fr.onload = function () {
         $("#avatar").each(function(){
           this.src = fr.result;
         });
       }
       fr.readAsDataURL(file);
    }

    // Store the new avatar with the Bowtie User Profile
    bowtie.user.profile({
      avatar: file
    }, function(){
      alert("saved");
    })
  });
});
