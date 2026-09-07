import { hoursLoad } from "../form/hours-load.js"
const selectDate = document.getElementById("date");

export function shedulesDay() {
  const date = selectDate.value;
  hoursLoad({ date });
}