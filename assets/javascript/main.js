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

setTimeout(animation1, 1200);
setTimeout(animation2, 2700);
setTimeout(animation3, 4000);
setTimeout(animation4, 6000);
setTimeout(animation5, 6275);


function animation1()
{
  document.getElementById("crashing").style.animationName="pullback1";
  document.getElementById("crashing").style.animationDelay="0";
  document.getElementById("crashing").style.animationDuration=".5s";
  document.getElementById("crashing").style.transitionTimingFunction="ease-out";
};

function animation2()
{
  document.getElementById("crashing").style.animationName="pullaway2";
  document.getElementById("crashing").style.animationDelay="0";
  document.getElementById("crashing").style.animationDuration=".5s"
  document.getElementById("crashing").style.transitionTimingFunction="ease-in";
};

function animation3()
{
  document.getElementById("crashing").style.animationName="pullback2";
  document.getElementById("crashing").style.animationDelay="0";
  document.getElementById("crashing").style.animationDuration=".5s"
  document.getElementById("crashing").style.transitionTimingFunction="ease-out";
};

function animation4(){
  document.getElementById("crashing").style.animationName="smash";
  document.getElementById("crashing").style.animationDelay="0";
  document.getElementById("crashing").style.animationDuration=".5s"
  document.getElementById("crashing").style.transitionTimingFunction="ease-in";
};

function animation5(){
  document.getElementById("crashing").style.animationName="smash2";
  document.getElementById("crashing").style.animationDelay="0";
  document.getElementById("crashing").style.animationDuration=".1s"
  document.getElementById("crashing").style.transitionTimingFunction="ease";
};
