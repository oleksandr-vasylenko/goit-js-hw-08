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
  console.log('Form has been submitted!');
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillMessage() {
  console.log(formData);
  if (formData) {
    refs.form.email.value = formData.email || '';
    refs.form.message.value = formData.message || '';
  }
}
