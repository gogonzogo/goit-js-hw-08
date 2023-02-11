import throttle from "lodash.throttle";

const ref = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
}
const STORAGE_FORM_KEY = "feedback-form-state";

ref.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  let formInputs = {
    "input": `${ref.email.value}`,
    "textarea": `${ref.message.value}`, 
  }
  localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(formInputs));
}

function fillForm() {
  const storedFormData = localStorage.getItem(STORAGE_FORM_KEY);
  if (storedFormData === null) {
    return;
  } else {
    const parsedFormData = JSON.parse(storedFormData);
    ref.email.value = parsedFormData.input;
    ref.message.value = parsedFormData.textarea;
  };
}

ref.form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(localStorage);
  evt.currentTarget.reset();
  localStorage.clear();
}


fillForm();