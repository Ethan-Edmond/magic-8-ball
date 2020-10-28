$(document).ready(function() {
  $("#answer").hide();
  var magic8ball = {};
  magic8ball.answers = ["Yes", "No", "Maybe", "Perhaps", "Not sure", "Your heart knows", "Outlook good", "Outlook bad", "Outlook unsure", "Ask a magic 9 ball", "Look to the stars", "The answer is in yourself", "The answer hides in dreams"];
  magic8ball.shake = function (question) {
    var random = Math.random();
    random = random * this.answers.length;
    random = Math.floor(random);
    $("#answer").text(this.answers[random]);
    //console.log(question);
    //console.log(this.answers[random]);
    $("#answer").fadeIn(4000);
  };
  var ask = function () {
    $("#answer").hide();
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    setTimeout(
      function () {
        var question = prompt("Ask Me Anything");
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
				$("#8ball").effect("shake");
        magic8ball.shake(question);
      }, 500);
	};
  $("#questionButton").click(ask);
});
