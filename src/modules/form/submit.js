import dayjs from 'dayjs';

const form = document.querySelector('form');
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

  console.log(selectDate.value);
  console.log('Formulário enviado!');
}