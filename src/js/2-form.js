// const form = document.querySelector('.login-form');

// form.addEventListener('submit', addInfoForm);

// function addInfoForm(event) {
//   event.preventDefault();

//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();

//   if (!email || !password) {
//     alert('All form fields must be filled in');
//   } else {
//     const userData = {
//       email,
//       password,
//     };

//     console.log(userData);

//     form.reset();
//   }
// }

const feedbackForm = document.querySelector('.feedback-form');
const feedbackInput = document.querySelector('.feedback-input');

feedbackForm.addEventListener('input', addInfoUser);
feedbackForm.addEventListener('submit', showInfoUser);
feedbackInput.addEventListener('focus', addAttributes);

function addAttributes() {
  const user = localStorage.getItem('feedback-form-state');
  const newAttributes = JSON.parse(user);

  if (!newAttributes) {
  } else {
    feedbackInput.setAttribute('placeholder', `${newAttributes.email}`);
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
    feedbackForm.reset();
  }
}
