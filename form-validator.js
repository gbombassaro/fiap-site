function validateFields() {
  let name = document.getElementById('name-input');
  let email = document.getElementById('email-input');
  let phone = document.getElementById('phone-input');
  let password = document.getElementById('password-input');

  let nameLabel = document.getElementById('nameLabel');
  let emailLabel = document.getElementById('emailLabel');
  let phoneLabel = document.getElementById('phoneLabel');
  let passwordLabel = document.getElementById('passwordLabel');

  let valid = true;
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
  let successMessage = document.getElementById('register-success-message');
  let errorMessage = document.getElementById('register-error-message');

  if (valid) {
    successMessage.classList.add('shouldRender')
    errorMessage.classList.remove('shouldRender')
  }
  if (!valid) {
    errorMessage.classList.add('shouldRender')
    successMessage.classList.remove('shouldRender')
  }
}