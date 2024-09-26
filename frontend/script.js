$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);
});


var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 3.8,
})
.to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )