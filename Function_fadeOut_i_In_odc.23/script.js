// (i) zapis krótszy
$(document).ready(function () {
  const allQuotes = $("blockquote");
  let currentQuote = 0;

  function changeQuote() {
    $(allQuotes[currentQuote]).fadeOut(200, function () {
      if (currentQuote == allQuotes.length - 1) {
        currentQuote = 0;
      } else {
        currentQuote++;
      }

      $(allQuotes[currentQuote]).fadeIn(200);
    });
  }

  const quoteTime = setInterval(changeQuote, 3000);
});

//(ii) zapis dluzszy
// $(document).ready(function () {
//   const allQuotes = $("blockquote");
//   let currentQuote = 0;

//   //   fadeOut - znikanie
//   //   fadeIn - pokazywanie
//   // nie wykona sie od razu, dopiero w setInterval
//   function changeQuote() {
//     $(allQuotes[currentQuote]).fadeOut(200);

//     // allQuotes.length = 3 póki co
//     if (currentQuote == allQuotes.length - 1) {
//       currentQuote = 0;
//     } else {
//       currentQuote++;
//     }

//     $(allQuotes[currentQuote]).fadeIn(200);
//   }

//   const quoteTime = setInterval(changeQuote, 3000);
// });
