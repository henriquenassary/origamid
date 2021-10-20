export default function tabIniti() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');
  
    function activeTab(index) {
      tabContent.forEach((e) => {
        e.classList.remove('active');
      });
      const direcao = tabContent[index].dataset.anima;
      tabContent[index].classList.add('active', direcao);
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}