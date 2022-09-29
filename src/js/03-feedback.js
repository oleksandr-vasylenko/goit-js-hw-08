import throttle from 'lodash.throttle';

const refs = {
  submit: document.querySelector('.feedback-form'),
  form: document.querySelector('.feedback-form'),
};

const formData = {};

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
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parcedMessage = JSON.parse(savedMessage);

  if (parcedMessage) {
    refs.form.email.value = parcedMessage.email;
  }

  if (parcedMessage) {
    refs.form.message.value = parcedMessage.message;
  }
}
