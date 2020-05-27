function validateFields() {
  var name = document.getElementById('name-input');
  var email = document.getElementById('email-input');
  var phone = document.getElementById('phone-input');
  var password = document.getElementById('password-input');

  var nameLabel = document.getElementById('nameLabel');
  var emailLabel = document.getElementById('emailLabel');
  var phoneLabel = document.getElementById('phoneLabel');
  var passwordLabel = document.getElementById('passwordLabel');

  var valid = true;
  clearInputValidate(name, email, phone, password);
  clearLabelValidate(nameLabel, emailLabel, phoneLabel, passwordLabel);

  if (name.value.length < 1) {
    name.classList.add('invalid');
    nameLabel.classList.add('invalid');
    valid = false;
  }
  if (email.value.length < 5) {
    email.classList.add('invalid');
    emailLabel.classList.add('invalid');
    valid = false;
  }
  if (phone.value.length < 11) {
    phone.classList.add('invalid');
    phoneLabel.classList.add('invalid');
    valid = false;
  }
  if (password.value.length < 8) {
    password.classList.add('invalid');
    passwordLabel.classList.add('invalid');
    valid = false;
  }
  renderMessage(valid);
  if (!valid) return console.log('invalido');
  return console.log('validate fields', name.value, email.value, phone.value, password.value);
}

function clearInputValidate(name, email, phone, password) {
  name.classList.remove('invalid');
  email.classList.remove('invalid');
  phone.classList.remove('invalid');
  password.classList.remove('invalid');
}
function clearLabelValidate(nameLabel, emailLabel, phoneLabel, passwordLabel) {
  nameLabel.classList.remove('invalid');
  emailLabel.classList.remove('invalid');
  phoneLabel.classList.remove('invalid');
  passwordLabel.classList.remove('invalid');
}
function renderMessage(valid) {
  console.log(valid);
  var successMessage = document.getElementById('register-success-message');
  var errorMessage = document.getElementById('register-error-message');

  if (valid) {
    successMessage.classList.add('shouldRender')
    errorMessage.classList.remove('shouldRender')
  }
  if (!valid) {
    errorMessage.classList.add('shouldRender')
    successMessage.classList.remove('shouldRender')
  }
}

function showTime() {
  var now = getTime();
  window.alert(now);
}

function getTime() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  return `Horário de Brasília: ${hours}:${minutes}`;
}