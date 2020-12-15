(function() {
    $('[data-ativo="true"]').click();
})();

function collapse(curso) {
    let simbol = document.querySelector(`span#${curso}`);
    if (simbol.textContent == '+') {
        simbol.innerHTML = '-';
    } else if (simbol.textContent == '-') {
        simbol.innerHTML = '+';
    }
}

$('.volta-topo').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});

function changeMode() {
    let img = document.querySelector('img#img-lampada');
    img.src = "img/lamp32px-acesa.png";
}