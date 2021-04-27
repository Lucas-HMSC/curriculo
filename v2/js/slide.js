class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }
    activeSlide(index){
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach(item => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }
    prev(){
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }
    next(){
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }
    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }
    addThumbItens(){
        this.items.forEach(() => {
            this.thumb.innerHTML += `<span></span>`
        });
        this.thumbItems = Array.from(this.thumb.children);
    }
    autoSlide(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }
    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItens();
        this.activeSlide(0);
        this.addNavigation();
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    this.onResize();
    return this;
  }
}

new SlideStories('slide');
new SlideStories('slide2');