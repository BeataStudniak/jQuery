const myLis = $("#points-of-sale li");

//(i)
// myLis.on("click", function () {
//   $(this).css({ background: "pink" });
//   myLis.off("click");
// });
//(ii)
myLis.click(function () {
  $(this).css({ background: "pink" });
  myLis.off("click");
});
