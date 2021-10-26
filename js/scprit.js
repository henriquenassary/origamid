import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import MenuMobile from './modules/menu-mobile.js'
import fetchAnimais from './modules/fetch-animais.js'
import Funcionamento from './modules/hora-funcionamento.js'
import ScrollAnima from './modules/anima-sections.js';
import DropDownMenu from './modules/dropdown-menu.js';

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

const scrollAnima = new ScrollAnima('[data-anima="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu=button]','[data-menu=list]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./json/animaisapi.json', '.numeros-grid');

const btnGeraNumero = document.querySelector('[data-gera="numero"]');
const mostraNumeroAleatorio = document.querySelector('.numero-aleatorio');
btnGeraNumero.addEventListener('click', () => {
  let min = Math.ceil(1);
  let max = Math.floor(201);
  mostraNumeroAleatorio.innerText = Math.floor(Math.random() * (max - min) + min);
});
