var nome = 'Henrique';
//console.log(nome);

var name = "Rique",
    age = 29;
    food = "Pizza";

var nomeAspas = "isso é \"Javascprit\" ";   
//console.log(nomeAspas);

var cidade = 'Guaira';
var idade = '29';

var sobrenome = 'Nassary';
var nomeCompleto = `${nome} ${sobrenome}`;
//console.log(nomeCompleto);

var nomes = ['Henrique', 'Leticia'];

for(var item = 0; item < nomes.length; item++) {
    //console.log(nomes[item]);
}

nomes.forEach(element => {
  // console.log(element) 
});

const linkInternos = document.querySelectorAll('[href^="#"]');
//console.log(linkInternos)

const HtmlCollection = document.getElementsByClassName('grid-section');
//console.log(HtmlCollection)

const NodeListt = document.querySelectorAll('.grid-section');
//console.log(NodeListt);

NodeListt.forEach(function(item, index){
  //console.log(item, index)
});

const imagemI = document.querySelectorAll('[src^="img/arena"]');
//console.log(imagemI)

NodeListt.forEach((item) => {
//console.log(item);
});

const section = document.querySelector('.animais');
section.clientHeight; //height + padding
section.offsetHeight; //height + padding + border 
section.scrollHeight; //height total, mesmo dentro do scroll

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let total = 0;
  imagens.forEach((i) => {
    const image = i.getBoundingClientRect().width;
    total = total + image;
   // console.log(total)
  });
}

window.onload = function() {
  somaImagens();
}

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  //console.log('TELA MOBILE');
} else {
  //console.log('TELA DESKTOP');
}

const imgs = document.querySelectorAll('img');

function handleImg(e) {
 // console.log(e.target.getAttribute('src'));
}

imgs.forEach((img) => {
  //img.addEventListener('click', handleImg);
});

const links = document.querySelectorAll('a');

function adicionaAtivo(event) {
  event.preventDefault();
  links.forEach((l) => {
    l.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
  
};

links.forEach((l) => {
  l.addEventListener('click', adicionaAtivo);
});

const boDy = document.querySelector('body');

function aumentaTexto(event) {
  if(event.key === 't') {
    boDy.classList.toggle('ativo');
  }
  
}

window.addEventListener('keyup', aumentaTexto);

//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
cloneMenu.appendChild(cloneMenu);

const ObjetoJson = [
  {
    descricao: 'Taxa do Caixa',
    valor: 'R$ 139',
  },
  {
    descricao: 'Nenhuma taxa',
    valor: 'R$ 45',
  },
];

let taxaTotal = 0;
ObjetoJson.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if(item.descricao.slice(0,4) === 'Taxa')
  taxaTotal = taxaTotal + numeroLimpo;
});

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 12,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 38,99'
  }
]

console.log(valorTotal)

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',','.');
  return acumulador + precoLimpo;
}, 0);
