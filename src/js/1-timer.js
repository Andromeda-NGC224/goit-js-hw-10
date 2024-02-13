`use strict`;
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector(`[data-start]`);
const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMinutes = document.querySelector(`[data-minutes]`);
const dataSeconds = document.querySelector(`[data-seconds]`);

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    if (selectedDates < this.defaultDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  },
};

let instance = flatpickr(datetimePicker, options);

startButton.addEventListener(`click`, timer);
function timer(event) {
  console.log(options.selectedDate);
  //   startButton.disabled = true;
  //   datetimePicker.disabled = true;

  const intervalId = setInterval(() => {
    const count = userSelectedDate.getTime() - new Date().getTime();
    if (count <= 0) {
      clearInterval(intervalId);
      UppdateTimerScreen(0);
      startButton.disabled = false;
      datetimePicker.disabled = false;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(count);
    UppdateTimerScreen(days, hours, minutes, seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Додавання нуля спереду
function addingZeroFirst(value) {
  return String(value).padStart(2, '0');
}

// Оновлення екрану таймера
function UppdateTimerScreen(days, hours, minutes, seconds) {
  dataDays.textContent = addingZeroFirst(days);
  dataHours.textContent = addingZeroFirst(hours);
  dataMinutes.textContent = addingZeroFirst(minutes);
  dataSeconds.textContent = addingZeroFirst(seconds);
}
