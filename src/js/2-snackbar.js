`use strict`;

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.form`);
const inputFulfilled = document.querySelector('[value="fulfilled"]');
const inputRejected = document.querySelector('[value="rejected"]');
const delayNumber = document.querySelector(`[name="delay"]`);

form.addEventListener(`submit`, event => {
  event.preventDefault();
  const delay = parseInt(delayNumber.value);
  const valueTrue = inputFulfilled.checked;
  const valueFalse = inputRejected.checked;

  MakePromice(delay, valueTrue, valueFalse);
});

// Function Timeout
function MakePromice(delay, valueTrue, valueFalse) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valueTrue) {
        resolve(delay);
      } else if (valueFalse) {
        reject(delay);
      }
    }, delay);
  });
  promise.then(delay => {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delay}ms`,
      position: `topRight`,
    });
  });
  promise.catch(delay => {
    iziToast.error({
      message: `❌ Rejected promise in ${delay}ms`,
      position: `topRight`,
    });
  });
}
