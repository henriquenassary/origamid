export default function initAnimaNumeros() {

  function animaNumeros() {
  
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100); 
      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 10);
    });
  }
  
  
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    };
  }
  
  const observerTarget = document.querySelector('.numeros');
  
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true});

  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const jsonResponse = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');


    jsonResponse.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('../../animaisapi.json');

}
