var college = "Are you in college?";
var inShape = "Are you in shape?";
var dumpster = "Would you eat from the dumpster?"
var narcissistic = "Are you all you can think about?"
var currentQuestion = college;



$(function() {
  $('#yesButton').on('click', function() {
    checkState("yes");
    $('#questionArea').text(currentQuestion);
  });
  $('#noButton').on('click', function(){
    checkState("no");
    $('#questionArea').text(currentQuestion);
  });
  $('#resetButton').on('click', function() {
    currentQuestion = college;
    $('#questionArea').text(currentQuestion);
    $('#character').empty();
  })
});


function checkState(yesNo) {
  if (yesNo === "no") {
    if (currentQuestion === college) {
      currentQuestion = inShape;
    } else if (currentQuestion === dumpster) {
      currentQuestion = narcissistic;
    } else if (currentQuestion === narcissistic) {
      $('#character').text("You are Deandra!");
    } else {
      $('#character').text("You are Charlie!");
    }
  } else if (currentQuestion === inShape) {
        $('#character').text("You are Mac!");
  } else if (currentQuestion === college) {
      currentQuestion = dumpster;
  } else if (currentQuestion === narcissistic) {
    $('#character').text("You are Dennis!");
  } else {
    $('#character').text("You are Frank!");
  }
}
