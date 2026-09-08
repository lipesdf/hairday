import { shedulesDay } from "../schedules/load"
// Selecionar o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários
selectedDate.onchange = () => shedulesDay()