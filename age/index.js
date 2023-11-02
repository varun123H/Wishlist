/*var rootRef = firebase.database().ref().child("user");
rootRef.on("child_added", snap => {

 

    var name = snap.child("userName").val();
    
    $("#par").append("<li>" + name + "</li>")
});*/

var rootRef = firebase.database().ref().child("user");

// Listen for child_added event and populate the list
rootRef.on("child_added", snap => {
    var name = snap.child("userName").val();
    $("#par").append("<li>" + name + "</li>");
});

// Handle search functionality

