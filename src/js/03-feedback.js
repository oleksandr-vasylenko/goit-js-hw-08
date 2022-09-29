import throttle from 'lodash.throttle';

const refs = {
  submit: document.querySelector('.feedback-form'),
  form: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
};

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
  //   console.log(e.target.name);
}

function fillMessage() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parcedMessage = JSON.parse(savedMessage);

  if (parcedMessage.email) {
    refs.form.email.value = parcedMessage.email;
  }

  if (parcedMessage.message) {
    refs.form.message.value = parcedMessage.message;
  }
}
