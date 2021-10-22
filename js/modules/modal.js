export default class initModal {
  
  constructor(btnAbrir, btnFechar, containerModal) {
    
    this.btnLogar = document.querySelector(btnAbrir);
    this.btnFechaModal = document.querySelector(btnFechar);
    this.modalContainer = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.btnLogar.addEventListener('click', this.eventToggleModal);
    this.btnFechaModal.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.btnLogar && this.btnFechaModal && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
  
}