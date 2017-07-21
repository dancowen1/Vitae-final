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

//get elements
const preObject = document.getElementById('object');
const ulList = document.getElementById('list');
const tList = document.getElementById('inpList');
//create refs
const dbRefObject = firebase.database().ref().child('object');
const dbRefList = dbRefObject.child('age');
const dbRefTList = firebase.database().ref().child('All users');
//sync object changes
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null , 3);
});
//sync list changes

dbRefList.on('child_added', snap => {
  const li = document.createElement('li'); //creates list element in dom
  li.innerText = snap.val(); //puts value into inner li item
  li.id = snap.key; //makes list id = their id on firebase
  ulList.appendChild(li); //appends the list item constant

});

dbRefList.on('child_changed', snap => {
 const liChanged = document.getElementById(snap.key);
 liChanged.innerText = snap.val();


});


dbRefList.on('child_removed', snap => {
 const liRemoved = document.getElementById(snap.key);
 liRemoved.remove();

});

var mainText = document.getElementById('mainText');
var submit_btn = document.getElementById('submit_btn');


}()];

function submitClick(){
  var firebaseRef = firebase.database().ref("liquid thought").child("employees")

  var messageText = mainText.value;

  firebaseRef.push().set("test");
}

dbRefTList.on('child_added', snap => {
  const li = document.createElement('li'); //creates list element in dom
  li.innerText = snap.val(); //puts value into inner li item
  li.id = snap.key; //makes list id = their id on firebase
  ulList.appendChild(li); //appends the list item constant

});

dbRefTList.on('child_changed', snap => {
 const liChanged = document.getElementById(snap.key);
 liChanged.innerText = snap.val();


});


dbRefTList.on('child_removed', snap => {
 const liRemoved = document.getElementById(snap.key);
 liRemoved.remove();

});
