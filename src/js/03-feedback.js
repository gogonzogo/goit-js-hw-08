const ref = {
  form: document.querySelector('form'),
}

let throttledOnInput = _.throttle(handleInput, 500);

ref.form.addEventListener("input", onInput);

function onInput(event) {
  event.preventDefault();
  


}