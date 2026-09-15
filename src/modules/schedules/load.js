import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "./show.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

// Seleciona o input de data
const selectDate = document.getElementById("date");

export async function shedulesDay() {
  // Obtém a data do input
  const date = selectDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({dailySchedules})

  hoursLoad({ date, dailySchedules });
}