
$("#submit").on("click", function(event) {
  event.preventDefault();
  var trainName = $("#trainN").val().trim();
  var destination = $("#dest").val().trim();
  var firstTrainTime = $("#firstTT").val().trim();
  var frequency = $("#freq").val().trim();
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
});

database.ref().set {

}

var inputs = $('form').serializeArray();
console.log(inputs);
