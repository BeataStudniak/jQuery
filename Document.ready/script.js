//////////////////////////////////////
///////////function(e)////////////////
//////////////////////////////////////
//(i)
$(document).ready(function () {
  // * tj każdy element
  $("*").on("click", function (e) {
    //typ
    console.log("Typ to:" + e.type);
    //element z html, nie można łączyć ze strignem!!
    console.log(e.target);
    console.log("Pozycja X to: " + e.pageX);
    console.log("Pozycja Y to: " + e.pageY);
    //nie dubluje tylko dla pierwszego elementu
    e.stopPropagation();
  });
});
//(ii)
$(function () {
  // * tj każdy element
  $("*").on("click", function (e) {
    //typ
    console.log("Typ to:" + e.type);
    //element z html, nie można łączyć ze strignem!!
    console.log(e.target);
    console.log("Pozycja X to: " + e.pageX);
    console.log("Pozycja Y to: " + e.pageY);
    //nie dubluje tylko dla pierwszego elementu
    e.stopPropagation();
  });
});

//////////////////////////////////////
///////////css vs animation////////////////
//////////////////////////////////////
$(function () {
  function koniec() {
    alert("Animacja zakończona");
  }

  $("section >h2").on("click", function () {
    //css = animate w tym przypadku
    //w animate nie mogę font zniemic
    //$(this).css({ width: "500px", height: "100px" });
    $(this).animate(
      { width: "500px", height: "100px" },
      1000,
      "linear",
      koniec
    );
  });
});
