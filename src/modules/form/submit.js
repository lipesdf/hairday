import dayjs from 'dayjs';
import { scheduleNew } from '../../services/schedule-new.js'

const form = document.querySelector('form');
const clienteName = document.getElementById("client")
const selectDate = document.getElementById('date');

// Data atual para o impute
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual no campo de data do formulário
selectDate.value = inputToday;

// Define a data mínima que pode ser selecionada no campo de data do formulário
selectDate.min = inputToday ;


form.onsubmit = async (event) => {
  // Previne o comportamento padrão do formulário de enviar os dados e recarregar a página
  event.preventDefault();

  try{
    // Recuperando o nome do cliente
    const name = clienteName.value.trim()

    if (!name){
      return alert("Informe o nome do cliente!")
    }

    // Recuperar o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")
    
    if(!hourSelected){
      return alert("Selecione a hora.")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectDate.value).add(hour,"hour")

    // Gera um ID
    const id = new Date().getTime()

    await scheduleNew( { id, name, when } )

  } catch(error){
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}