/* Em produção*/
function changeMode() {
    event.preventDefault();
    const mode = localStorage.getItem('dark');
    if (mode === 'true') {
        changePhoto(1);
        localStorage.setItem('dark', false);
        acender();
    } else if (mode === 'false') {
        changePhoto(2);
        localStorage.setItem('dark', true);
        apagar();
    }
}

function acender(){
    const html = document.querySelector('html');
    const corpo = document.body;
    const tith3 = document.querySelector('.masthead-brand');
    const navLink = document.querySelectorAll('.nav-link');
    const txtMuted = document.querySelector('.text-muted');
    const links = document.querySelectorAll('[data-link="external"]');
    const divContato = document.querySelectorAll('[data-div="contato"]');

    html.classList.add('light');
    corpo.classList.add('light');
    tith3.classList.add('masthead-light');
    navLink.forEach((item) => {
        item.classList.add('nav-light');
    });
    txtMuted.classList.add('light');
    links.forEach((item) => {
        item.classList.add('light');
    });
    divContato.forEach((item) => {
        item.classList.remove('border-dark');
    });
}

function apagar(){
    const html = document.querySelector('html');
    const corpo = document.body;
    const tith3 = document.querySelector('.masthead-brand');
    const navLink = document.querySelectorAll('.nav-link');
    const txtMuted = document.querySelector('.text-muted');
    const links = document.querySelectorAll('[data-link="external"]');
    const divContato = document.querySelectorAll('[data-div="contato"]');
    
    html.classList.remove('light');
    corpo.classList.remove('light');
    tith3.classList.remove('masthead-light');
    navLink.forEach((item) => {
        item.classList.remove('nav-light');
    });
    txtMuted.classList.remove('light');
    links.forEach((item) => {
        item.classList.remove('light');
    });
    divContato.forEach((item) => {
        item.classList.add('border-dark');
    });
}

function changePhoto(option){
    let img = document.querySelector('img#img-lampada');
    const local = img.src.split('img/')[0] + 'img/';
    let nome = img.src.split('img/')[1];

    switch (option){
        case 1:
            nome = 'lamp32px-acesa.svg';
            img.src = local + nome;
            break;
        case 2:
            nome = 'lamp32px-apagada.svg';
            img.src = local + nome;
            break;
    }
}


(function() {
    $('[data-ativo="true"]').click();

    if (!localStorage.getItem('dark')){
        localStorage.setItem('dark', false);
    }
    const mode = localStorage.getItem('dark');
    if (mode === 'true') {
        changePhoto(2);
        apagar();
    } else {
        changePhoto(1);
        acender();
    }
})();

function collapse(curso) {
    let simbol = document.querySelector(`span#${curso}`);
    if (simbol.textContent === '+') {
        simbol.innerHTML = '-';
    } else if (simbol.textContent === '-') {
        simbol.innerHTML = '+';
    }
}

$('.volta-topo').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});

(function escondeClasse() {
    if (window.matchMedia("(max-width: 575px)").matches) {
        const esconder = document.querySelector('.esconder');
        esconder.classList.add('d-none');
    } 
})();