export default function initFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  
  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

//Form
const contato = document.querySelector('#contato');
const dados = {};

//function handleChange(event) {
  //dados[event.target.name] = event.target.value;
//}

//contato.addEventListener('change', handleChange);

//PROMISSES COM THEN
const doc = fetch('./js/modules/doc.txt');

doc.then(resolve => resolve.text()).then(body => {
  const conteudo = document.querySelector('.conteudo-txt');
  //conteudo.innerText = body;
});

const cep = fetch('https://viacep.com.br/ws/14790000/json');

cep.then(resolve => resolve.json()).then(body => {
  //const conteudo = document.querySelector('.conteudo-txt');
  //conteudo.innerText = body.localidade;
});



