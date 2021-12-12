// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9c1gLm-Qcvj8hCEnHKpbGe2KfmtGtY-k",
    authDomain: "kwitter-e54f6.firebaseapp.com",
    projectId: "kwitter-e54f6",
    storageBucket: "kwitter-e54f6.appspot.com",
    messagingSenderId: "475422778979",
    appId: "1:475422778979:web:3555c009264de263773a56"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  
function addUser(){
    user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";

}
