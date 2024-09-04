// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDrRU7QuBc0TFG_Ks5hNUgAMPAReps1giU",
  authDomain: "tech-emporium.firebaseapp.com",
  databaseURL: "https://tech-emporium-default-rtdb.firebaseio.com",
  projectId: "tech-emporium",
  storageBucket: "tech-emporium.appspot.com",
  messagingSenderId: "567746946369",
  appId: "1:567746946369:web:b3ae388079981d4422edc0",
  measurementId: "G-YQNCSRVK9F"

};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}