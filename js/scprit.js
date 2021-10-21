import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import tabIniti from './modules/tabNav.js';
import initModal from './modules/modal.js'
import initToltip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initAnimaNumeros from './modules/anima-numeros.js'
import initFuncionamento from './modules/hora-funcionamento.js'
import initAnimaSections from './modules/anima-sections.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

tabIniti();
initModal();
initToltip();
initDropDownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initAnimaSections();


