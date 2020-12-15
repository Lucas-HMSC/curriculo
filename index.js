/* Em produção
function changeMode() {
    let img = document.querySelector('img#img-lampada').src;
    
    console.log(img);
    *
    if (img == apagada){
        img.src = "img/lamp32px-acesa.png";
    } else if (img == acesa){
        img.src = "img/lamp32px-apagada.png";
    }*
}*/

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