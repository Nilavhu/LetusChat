//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyAngwYVXVsTrs7RvaZiqZOVqKHcNzTnIsA",
    authDomain: "kwitter-e5cb4.firebaseapp.com",
    databaseURL: "https://kwitter-e5cb4-default-rtdb.firebaseio.com",
    projectId: "kwitter-e5cb4",
    storageBucket: "kwitter-e5cb4.appspot.com",
    messagingSenderId: "145381506908",
    appId: "1:145381506908:web:4ad136f57bc14cb4af8b99"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";


function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="Kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= room;


//End code
});});}
getData();

function redirectToRoomName(name) {
localStorage.setItem("room_name",name);
window.location="Kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}



