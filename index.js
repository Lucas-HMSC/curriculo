function collapse(curso) {
    let simbol = document.querySelector(`span#${curso}`);
    //window.alert(simbol);
    if (simbol.textContent == '+') {
        simbol.innerHTML = '-';
    } else if (simbol.textContent == '-') {
        simbol.innerHTML = '+';
    }
}