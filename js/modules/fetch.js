const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then(response => {
    const r2 = response.clone();
    response.json().then(dataJson => {
      cidade.value = dataJson.localidade
      uf.value = dataJson.uf;
      
    })
    r2.text().then(body => {
      resultadoCep.innerText = body;
    })
  })
  
}

//Fetch BITCOIN
function fetchBTC() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btc => {
    //console.log(btc.BRL.sell);
  })
}

fetchBTC();

//async e await
async function iniciarAsync() {
  const dadosResponse = await fetch('https://blockchain.info/ticker');
  const dadosJson = await dadosResponse.json();
 // console.log(dadosJson);
}

iniciarAsync();

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}