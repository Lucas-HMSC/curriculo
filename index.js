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