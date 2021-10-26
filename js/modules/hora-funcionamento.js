export default class Funcionamento {
  constructor(functionamento, activeClass) {
    this.funcionamento = document.querySelector(functionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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



