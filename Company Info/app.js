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
var coname = document.getElementById('first-inp');
var address1 = document.getElementById('second-inp1');
var address2 = document.getElementById('second-inp2');
var address3 = document.getElementById('second-inp3');
var address4 = document.getElementById('second-inp4');
var subBtn = document.getElementById("cont-btn");


function writeUserData() {
    var conameval = coname.value;
    var address = address1.value + " " + address2.value + " " + address3.value + " " + address4.value;
    var firebaseRef = firebase.database().ref('liquid thought').child("company info");
    firebaseRef.child('Company Name').set(conameval);
    firebaseRef.child('Address').set(address);
  }


// {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// }
