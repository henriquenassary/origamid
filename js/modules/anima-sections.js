export default function initanimacaoSections() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll() {
      sections.forEach((i) => {
        const sectionTop = i.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          i.classList.add('ativo');
        }
        else if(i.classList.contains('ativo')) {
          i.classList.remove('ativo');
        }
      });
    }
    
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
  
  }

}