const feedbackForm = document.querySelector('.feedback-form');
const inputFormUser = document.querySelector('.feedback-input');
const textareaFormUser = document.querySelector('.feedback-textarea');

feedbackForm.addEventListener('input', addInfoUser);
feedbackForm.addEventListener('submit', showInfoUser);
document.addEventListener('DOMContentLoaded', addAttributes);

function addAttributes() {
  const user = localStorage.getItem('feedback-form-state');
  const newAttributes = JSON.parse(user);

  if (!newAttributes) {
  } else {
    inputFormUser.setAttribute('placeholder', `${newAttributes.email}`);
    textareaFormUser.setAttribute('placeholder', `${newAttributes.message}`);
  }
}

function addInfoUser(event) {
  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  const user = {
    email,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function showInfoUser(event) {
  event.preventDefault();

  const user = localStorage.getItem('feedback-form-state');

  if (
    !feedbackForm.elements.email.value.trim() ||
    !feedbackForm.elements.message.value.trim()
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(user));
    localStorage.removeItem('feedback-form-state');
    inputFormUser.removeAttribute('placeholder');
    textareaFormUser.removeAttribute('placeholder');
    feedbackForm.reset();
  }
}
