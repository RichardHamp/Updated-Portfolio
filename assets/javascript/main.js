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

// Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyDhF8ibSiX8yD4jbRKzHHP_A2cMEz9CNz0",
    authDomain: "portfolio-4b2d5.firebaseapp.com",
    databaseURL: "https://portfolio-4b2d5.firebaseio.com",
    projectId: "portfolio-4b2d5",
    storageBucket: "portfolio-4b2d5.appspot.com",
    messagingSenderId: "874944777852",
    appId: "1:874944777852:web:26eb84b50f2a78b34303f9"
};

// Initialize Firebase

var formData = {
    "name": $('#name').val(),
    "email": $('#email').val(),
}

// Listens for Form Submission and Pushes to Firebase
$('#submit1').submit(function (evt) {
  $(".homeButton").on("click", function () {
    hideAll();
    $("#home").show();
  })
})