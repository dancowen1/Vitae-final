[function(){
  var config = {
    apiKey: "AIzaSyBOs917wq_m0NDP1ore-6VC7mGMYBWkhXo",
    authDomain: "initialsetup-33233.firebaseapp.com",
    databaseURL: "https://initialsetup-33233.firebaseio.com",
    projectId: "initialsetup-33233",
    storageBucket: "initialsetup-33233.appspot.com",
    messagingSenderId: "770670739510"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// function submitClick(){
//   var firebaseRef = firebase.database().ref("liquid thought").child("employees")
//
//   var messageText = mainText.value;
//
//   firebaseRef.push().set("test");
// }
}()];
var p1 = document.getElementById('first-inp');
var p2 = document.getElementById('second-inp');
var subBtn = document.getElementById("cont-btn");


function writeUserData() {
    var pass1 = p1.value;
    var pass2 = p2.value;
    if (pass1 != pass2){
      alert("Passwords dont match")
    } else{
    var firebaseRef = firebase.database().ref('liquid thought').child("admin");
    firebaseRef.child('password').set(pass1);}
  };


// {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// }
