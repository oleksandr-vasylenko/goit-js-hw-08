import throttle from 'lodash.throttle';

const refs = {
  submit: document.querySelector('.feedback-form'),
  form: document.querySelector('.feedback-form'),
};

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

refs.submit.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

fillMessage();

function onSubmit(e) {
  e.preventDefault();

  if (
    e.currentTarget.elements.email.value === '' ||
    e.currentTarget.elements.message.value === ''
  ) {
    alert(
      '🚫 The form has not been submitted. Please make sure you filled in the email and the message fields'
    );
    return;
  }

  console.log('Form has been submitted!');
  // console.log(`Your email: ${refs.form.email.value}`);
  // console.log(`Your message: ${refs.form.message.value}`);
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillMessage() {
  if (formData) {
    refs.form.email.value = formData.email || '';
    refs.form.message.value = formData.message || '';
  }
}
