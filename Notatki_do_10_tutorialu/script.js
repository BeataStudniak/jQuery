// next() pobiera następny element rodzeństwa po danym selektorze
// prev() pobiera poprzedni element rodzeństwa po danym selektorze
// parent() pobiera rodzica danego selektora
// parents() pobiera wsio rodziców danego selektora
// children() pobiera wsio dzieci danego selektora
$("#contact-methods").next().css({ border: "2px solid blue" });
// find(".nazwaClass") szuka nazwyClass wew danego selektora -szybsza niż ta poniżej
$("#contact").find(".facebook").css({ border: "2px solid blue" });
//wolniejsza
// $("#contact .facebook").css({ border: "2px solid pink" });

// closest(".nazwaClass") najblizszy parent o nazwieClass pasujący do danego elementu
$("#social-nav").closest(".wrapper").css({ border: "2px solid orange" });

//wiele można na jednym elemencie
$("#contact-methods")
  .css({ border: "2px solid yellow" })
  .next()
  .css({ border: "2px solid blue" })
  .closest("section")
  .css({ border: "2px solid green" });

// DODAWANIE nowego elementu np. div
const newDiv =
  "<div style='margin:20px 0; background: #eee'>Dodajemy nowy tekst w divie</div>";
//.append() - adds content to bottom of the element
//.prepend() - adds content to top of the element
//.before() - adds content before of the element
//.after() - adds content after the element
$("#tweets div").append(newDiv);
//.html() - change all of html of the element
//.text() - change ściśle na text danego elementu
// $("#tweets div p").html(newDiv);
// $("#tweets div p").text(newDiv);

//WRAP - pakowanie i rozpakowywanie
//wrap('<div>') - opakować osobno dany element
//wrapAll('<div>') - opakować 1 divem wsio element
//unwrap() - rozpakować 1 rodzica
// $("section").wrap("<div style='border:2px solid '>");
// $("section").unwrap();
// $("section").wrapAll("<div>");
