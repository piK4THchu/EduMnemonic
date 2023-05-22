//To output the input of the user to another html file
const login = document.getElementById('login');
const fullName = document.getElementById('fullName');
const userName = document.getElementById('userName');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const fullNameValue = fullName.value;
  const userNameValue = userName.value;

  window.location.href = "lobby.html";
})