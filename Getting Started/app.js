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
var fname = document.getElementById('first-name');
var sname = document.getElementById('last-name');
var email = document.getElementById('email-input');
var subBtn = document.getElementById("cont-btn");


function writeUserData() {
    var fsname = fname.value + " " + sname.value;
    var temail = email.value;
    var firebaseRef = firebase.database().ref('liquid thought').child("admin");
    firebaseRef.child('name').set(fsname);
    firebaseRef.child('email').set(temail);

};

// {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// }
