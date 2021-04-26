/* Scroll Suave */
const item = document.querySelector('a[href="#top"]');

item.addEventListener('click', scrollToTop);

function scrollToTop(event) {
    event.preventDefault();

    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}