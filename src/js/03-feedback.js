import throttle from "lodash.throttle";

const ref = {
  form: document.querySelector('form'),
}
const STORAGE_KEY = "feedback-form-state";

ref.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  event.preventDefault();
  
    const {
      elements: { email, message }
    } = event.currentTarget;
    
      let formInput = {
        "email": `${email.value}`,
      "message": `${message.value}`, 
      }
  console.log(formInput);

}