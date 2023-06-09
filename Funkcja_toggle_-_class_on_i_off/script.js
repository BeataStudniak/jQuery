//toggleClass(" ") - włacza i wyłącza classę danego elementu
const button = $("#lead-banner a");

$(function () {
  button.click(function () {
    //przełaczenie class z :
    //style="height: 0; overflow: hidden"
    //na class .open w css
    $("#points-of-sale").toggleClass("open");
    return false;
  });
});
