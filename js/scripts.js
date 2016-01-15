var college = "Did you graduate from college?";
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
    $('img').remove();
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
      $('.col-md-12').find('br').last().before("<img src='images/dee.jpg'></img>");
    } else {
      $('#character').text("You are Charlie!");
      $('.col-md-12').find('br').last().before("<img src='images/charlie.jpg'></img>");
    }
  } else if (currentQuestion === inShape) {
        $('#character').text("You are Mac!");
        $('.col-md-12').find('br').last().before("<img src='images/mac.jpg'></img>");
  } else if (currentQuestion === college) {
      currentQuestion = dumpster;
  } else if (currentQuestion === narcissistic) {
    $('#character').text("You are Dennis!");
    $('.col-md-12').find('br').last().before("<img src='images/dennis.jpg'></img>");
  } else {
    $('#character').text("You are Frank!");
    $('.col-md-12').find('br').last().before("<img src='images/frank.jpg'></img>");
  }
}
