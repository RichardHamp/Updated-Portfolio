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

// Listens for Form Submission and Pushes to Firebase
$('#submit1').on("click",function () {
 event.preventDefault();
 name= $('#nameInput').val().trim();
 email= $('#emailInput').val().trim();
 subject= $("#subjectInput").val().trim();

  //pushes to firebase
  database.ref().push({
      name: name,
      email: email,
      subject: subject,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  alert("Thanks! I'll get back to you shortly.")
  //resets form for next train
  $("form")[0].reset();
});