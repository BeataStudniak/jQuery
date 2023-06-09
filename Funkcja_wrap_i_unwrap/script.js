const wrapper = "<div class='wrapper'>";
const button = $(".button");
let wrapped = true;

//MOJA METODA
$(function () {
  $(".button").click(function () {
    if (wrapped) {
      $("section").unwrap();
      wrapped = false;
      button.text("Wrap");
    } else {
      //w wrap i wrapAll nie trzeba domykać div - sam sie automatycznie domknie
      $("section").wrapAll(wrapper);
      wrapped = true;
      button.text("Unwrap");
    }
  });
});

// JEGO METODA
// button[0].onclick = function () {
//   if (wrapped) {
//     $("section").unwrap();
//     wrapped = false;
//     button.text("Wrap");
//   } else {
//     //w wrap i wrapAll nie trzeba domykać div - sam sie automatycznie domknie
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("Unwrap");
//   }
// };
