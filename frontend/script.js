/*
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
*/


$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);

    $(".Loading").on("animationend", function() {
        $(this).animate({
            width: '0%'
        }, 1000, function() {
            // Show zip code input and continue button after the loading bar disappears
            $("#zipCodeInput").fadeIn();
            $("#continueBtn").fadeIn();
        });
    });

    // Handle click on continue button
    $("#continueBtn").click(function() {
        var zipCode = $("#zipCodeInput").val();
        // Check if the zip code input is not empty
        if (zipCode.trim() === "") {
            alert("Please enter your zip code to continue.");
        } else {
            // Proceed with the next step if zip code is entered
            alert("Zip Code entered: " + zipCode + ". Proceeding...");
            // Add additional actions here to actually proceed
        }
    });
});