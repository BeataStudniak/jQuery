//////////////////////////////////////////////
//opacity nie, lepiej fadeOut, In i To////////
//////////////////////////////////////////////
$(function () {
  $("section >h2").on("click", function () {
    //fadeOut(time) - opacity:0 czyli znika
    //fadeIn() - opacity:1 czyli pokazuje
    //fadeTo(time, wlasny zakres) - opacity:0-1
    $(this).fadeOut(2000).fadeIn(500);
    // $(this)
    //   .fadeTo(200, 0.2)
    //   .fadeTo(200, 0.8)
    //   .fadeTo(200, 0.2)
    //   .fadeTo(200, 0.8)
    //   .fadeTo(200, 0.2)
    //   .fadeTo(200, 0.8)
    //   .fadeTo(200, 0.2)
    //   .fadeTo(200, 0.8);
  });
});
