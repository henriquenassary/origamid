import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import fetchAnimais from './modules/fetch-animais.js'
import initFuncionamento from './modules/hora-funcionamento.js'
import initAnimaSections from './modules/anima-sections.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal  = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaSections();

fetchAnimais('origamid/json/animaisapi.json', '.numeros-grid');

const btnGeraNumero = document.querySelector('[data-gera="numero"]');
const mostraNumeroAleatorio = document.querySelector('.numero-aleatorio');
btnGeraNumero.addEventListener('click', () => {
  let min = Math.ceil(1);
  let max = Math.floor(200);
  mostraNumeroAleatorio.innerText = Math.floor(Math.random() * (max - min) + min);
});
