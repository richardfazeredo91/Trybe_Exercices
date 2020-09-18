states = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)]',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)'
]

states.forEach(element => {
  let dropdown = document.querySelector('.dropdown');
  let option = document.createElement('option');
  dropdown.appendChild(option).innerText = element
});

let date = document.getElementById('date').value;

function validatesDate (date) {
  let arr = date.split('/');
  let day = parseInt(arr[0]); 
  let month = parseInt(arr[1]);
  let year = parseInt(arr[2]);
  
  let result =
    ((day > 0 && day <= 31) &&
    (month > 0 && month <= 12) &&
    (year >= 0)) ? `${day}/${month}/${year}` :
    'Você informou uma data inválida!';

  return result;
}

console.log(validatesDate(date));


