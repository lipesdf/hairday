import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const hoursList = document.getElementById('hours')

export function hoursLoad({ date }){
  const opening = openingHours.map((hour)=>{
    // Recupera apenas a hora
    const [sheduleHour] = hour.split(':')
    
    // Adiciona a hora no date e verifica se esta no passado
    const isHourPast =  dayjs(date).add(sheduleHour, 'hour').isAfter(dayjs())

    return {
      hour,
      available: isHourPast,  
    }
  })
  
  // Renderizar os horarios
  opening.forEach(({hour, available})=>{
    const li = document.createElement('li')

    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    hoursList.append(li)

  })
  
}