// Hides all divs
function hideAll() {
  $("#home, #contact, #portfolio, #about").hide();
} hideAll();
$("#home").show();

//Navigation Buttons
$(".homeButton").on("click", function () {
  hideAll();
  $("#home").show();
})

$(".aboutButton").on("click", function () {
  hideAll();
  $("#about").show();
})

$(".portfolioButton").on("click", function () {
  hideAll();
  $("#portfolio").show();
})

$(".contactButton").on("click", function () {
  hideAll();
  $("#contact").show();
})

$(document).ready(function() {
    if ($('#newContact').length > 0 ) {
        contactScript('forcontact');
    }
});