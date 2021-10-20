export default function initModal() {
  
  const btnLogar = document.querySelector('[data-modal="abrir"]');
  const btnFechaModal = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if(btnLogar && btnFechaModal && modalContainer) {

    function abrirModal(event) {
      event.preventDefault();
      modalContainer.classList.add('ativo');
    }

    function fechaModal(event) {
      event.preventDefault();
      modalContainer.classList.remove('ativo');
    }

    function cliqueForaModal(event) {
      if(event.target === this) {
        fechaModal(event);
      }
    }
    btnLogar.addEventListener('click', abrirModal);
    btnFechaModal.addEventListener('click', fechaModal);
    modalContainer.addEventListener('click', cliqueForaModal);
  }
  
  
}