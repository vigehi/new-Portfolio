// To save form data in the local storage and retrive it on window load
const formEl = document.querySelector('#contact-form');
const userName = formEl.querySelector('#name');
const userEmail = formEl.querySelector('#email');
const userMesssage = formEl.querySelector('#message');

const saveData = () => {
  const formData = {
    name: userName.value,
    email: userEmail.value,
    message: userMesssage.value,
  };
  localStorage.setItem('sessionData', JSON.stringify(formData));
};

userName.addEventListener('input', saveData);
userEmail.addEventListener('input', saveData);
userMesssage.addEventListener('input', saveData);

window.addEventListener('load', () => {
  const serializeFormData = JSON.parse(localStorage.getItem('sessionData'));
  userName.value = serializeFormData.name;
  userEmail.value = serializeFormData.email;
  userMesssage.value = serializeFormData.message;
});