import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hoursList = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules }){
  // Limpa a lista de horários
  hoursList.innerHTML = ""

  // Obtém a lista dos horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
  
  const opening = openingHours.map((hour)=>{
    // Recupera apenas a hora
    const [sheduleHour] = hour.split(':')
    
    // Adiciona a hora no date e verifica se esta no passado
    const isHourPast =  dayjs(date).add(sheduleHour, 'hour').isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })
  
  // Renderizar os horarios
  opening.forEach(({hour, available})=>{
    const li = document.createElement('li')

    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

  if (hour === "09:00"){
    hourHeaderAdd("Manhã")
  } else if (hour === "13:00"){
    hourHeaderAdd("Tarde")
  } else if (hour === "18:00"){
    hourHeaderAdd("Noite")
  }

    hoursList.append(li)
  })

  // Adiciona o evento de clique nos horários disponíveis
  hoursClick()
}

function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hoursList.append(header)
}