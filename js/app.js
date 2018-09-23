var app = document.getElementById("app").value;
var api = document.getElementById("api").value;
var title = document.getElementById("title").value;
var description = document.getElementById("description").value;
var topic = document.getElementById("topic");

var endpoint = "https://fcm.googleapis.com/fcm/send";

$("#submit").click(function() {
  var app = $("#app").val();
  var api = $("#api").val();
  var title = $("#title").val();
  var description = $("#description").val();
  var topic = $("#topic").val();

  console.log(app);

  var requestData = {
    notification: {
      title: title,
      body: description,
      sound: "default"
    },
    to: "/topics/" + topic,
    priority: "high",
    restricted_package_name: app
  };

  $.ajax({
    type: "POST",
    url: endpoint,
    contentType: "application/json; charset=utf-8",
    dataType: "JSON",
    data: JSON.stringify(requestData),
    headers: {
      "content-type": "application/json",
      Authorization: "key=" + api
    },
    success: function(data) {
      alert("Push Notification Successfully");
      console.log(data);
    },
    error: function(error) {
      $("#error").html(error.responseText);
    }
  });
});
