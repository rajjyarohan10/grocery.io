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

   $("#continueBtn").click(function() {
        var zipCode = $("#zipCodeInput").val();
        if (zipCode.trim() === "") {
            alert("Please enter your zip code to continue.");
        } else {
            // Fade out the current page before redirecting
            $("body").fadeOut(1000, function() {
                // Redirect to the second page
                window.location.href = "second_page.html";
            });
        }
    });
});