import throttle from "lodash.throttle";

const ref = {
  form: document.querySelector('form'),
}

ref.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  event.preventDefault();
  


}