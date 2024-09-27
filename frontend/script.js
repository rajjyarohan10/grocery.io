$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);
});

$(document).ready(function(){
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);

  // Animate the loading bar out and show the button after the loading is complete
  $(".Loading").on("animationend", function() {
      // Hide the loading bar smoothly
      $(this).animate({
          width: '0%'
      }, 1000, function() {
          // This function is called after the loading bar animation is complete
          // Now display the Continue button
          $("#continueBtn").fadeIn();
      });
  });
});