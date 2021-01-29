$(document).ready(function() {
  //gets value of counter
  //let charLeft = $(".counter").val();
  $("#tweet-text").on("input", function() {
    
    //charLeft--;
    //sets value of the counter
    //$(".counter").val(charLeft);
    
    //if value of counter is less than 0
    if (140 - $(this).val().length < 0) {
      $(".counter").addClass("red-color")
        .val(140 - $(this).val().length);
    } else {
      $(".counter").removeClass("red-color")
        .val(140 - $(this).val().length);
    }
  });

});

 
   