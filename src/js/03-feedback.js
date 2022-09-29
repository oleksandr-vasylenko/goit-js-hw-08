import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onSubmit);
refs.textarea.addEventListener('input', throttle(onInput, 500));

fillMessage();

function onSubmit(e) {
  e.preventDefault();
  console.log('Form has been submitted!');
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(e) {
  const message = e.target.value;
  localStorage.setItem('feedback-form-state', message);
}

function fillMessage() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
