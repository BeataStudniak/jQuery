// empty() - czyści wsio wew - całą zawartość tekstową i elementy
// $(".button").empty();
// $("#points-of-sale").empty();
// remove() - usuwa dany element
// $(".button").remove();
// $("#points-of-sale").remove();
//removeAttr("alt") - usuwa atrybut danego elementu
// $("#contact img").removeAttr("alt");
//attr("alt") - odczytanie atrybutu danego elementu
//attr("alt". "innaNazwa") - zmiana atrybutu danego elementu
// $("#contact img").attr("alt",'lacation');
//css("backgroung") - odczytanaie atrybutu danego elementu
// console.log($("#social-nav").css("top"));
//css("backgroung","blue") - zmiana atrybutu danego elementu
$("#social-nav").css("top", "-20px");
console.log($("#social-nav").css("top"));
// (i) zmiana wielu
// $("#social-nav").css("top", "-20px").css("left", "100px");
// (ii) zmiana wielu
$("#social-nav").css({ top: "-20px", left: "100px" });

//removeClass(" ") - usuwa classę danego elementu
//addClass(" ") - dodaj classę do danego elementu
//toggleClass(" ") - włacza i wyłącza classę danego elementu
// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("newClass");
