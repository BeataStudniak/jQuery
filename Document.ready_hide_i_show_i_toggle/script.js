//////////////////////////////////////////////
//hide i show////////
//////////////////////////////////////////////
$(function () {
  $("section > h2").on("click", function () {
    //hide(time) - chowanie
    //show(time) - pokazywanie
    $(this).hide(1000).show(1000);
  });
  $("img[alt=map]").on("click", function () {
    //toggle(time) - chowanie po wcisnieciu innego elementu
    $("section > h2").toggle(1000);
  });
});
