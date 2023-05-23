// Get user details from the form
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var age = document.getElementById('age').value;

// Create user object
var user = {
  name: name,
  email: email,
  age: age
};

// Convert user object to a JSON string
var userJSON = JSON.stringify(user);

// Store user details in localStorage
localStorage.setItem('user', userJSON);
// Retrieve user details from localStorage
var userJSON = JSON.parse(localStorage.getItem('user'));

// Convert JSON string to user object
//var user1 = JSON.parse(userJSON);
console.log(userJSON);
// Access user details
    //  var name = user.name;
    //  var email = user.email;
    //  var age = user.age;
