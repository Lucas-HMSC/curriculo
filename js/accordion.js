class Accordion {
    constructor(list) {
      this.accordionList = document.querySelectorAll(list);
      this.activeClass = 'ativo';
      this.init();
    }
  
    toggleAccordion(item) {
      item.classList.toggle(this.activeClass);
      item.nextElementSibling.classList.toggle(this.activeClass);
    }
  
    // Adiciona os eventos ao accordion
    addAccordionEvent() {
      this.accordionList.forEach((item) => {
        item.addEventListener('click', () => this.toggleAccordion(item));
      });
    }
  
    // Inicia a função
    init() {
      if (this.accordionList.length){
        this.toggleAccordion(this.accordionList[0]);
        this.addAccordionEvent();
      }
      return this;
    }
}

new Accordion('[data-anime="accordion"] li.top-titulo')