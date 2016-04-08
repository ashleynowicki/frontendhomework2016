
// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  var prefix = ["OUTLOOK NOT SO GOOD", "TRY AGAIN LATER", "AS I SEE IT YES", "CANNOT PREDICT NOW", "RELY ON IT"]

//Make sure that jQuery is working
console.log("If you see this, jQuery is working");
  function buttonClicked(){
    var username = $('#username').val()
    var randomAnswer = Math.floor(Math.random() * prefix.length)
    var question = prefix [randomAnswer]
    $('.response').text(question)
  }
//Click button
  $('#submit').click(buttonClicked)
});
