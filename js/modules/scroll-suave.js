export default function initScrollSuave () {
  const menus = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
  
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }
  
  menus.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}