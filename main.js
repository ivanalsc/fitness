let menuBtn = document.querySelector('.hamburguer-btn');
let menuMobile = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', openMenu);

function openMenu(){
    menuMobile.classList.toggle('open');
}

window.sr = ScrollReveal();

sr.reveal('.services', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.cards-plan', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});

sr.reveal('.app', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});