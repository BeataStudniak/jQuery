//////////////////////////////////////////////
//slide up i down////////
//////////////////////////////////////////////
$(function () {
  $(".slide-button-up").on("click", function () {
    // slideUp() -chowanie danego elemenu
    $("#lead-banner").slideUp(100);
  });

  $(".slide-button-down").on("click", function () {
    // slideUp(time) -pokazywanie danego elemenu
    $("#lead-banner").slideDown(4000, function () {
      alert("Animation complete");
    });
  });
});

// $(function () {
//   $(".slide-button-up").on("click", function () {
//     // slideToggle(time) -chowanie danego elemenu
//     $("#lead-banner").slideToggle(1000, function () {
//       alert("animation complete");
//     });
//   });
// });
