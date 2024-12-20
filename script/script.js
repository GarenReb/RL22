const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
const mobileMenu = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links li a');

mobileMenuTrigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuTrigger.classList.toggle('active');

    // Opdaterer aria-expanded baseret på menuens tilstand
    if (mobileMenu.classList.contains('active')) {
        mobileMenuTrigger.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenuTrigger.setAttribute('aria-expanded', 'false');
    }
});
//Luk hamburger-menu med escape
document.addEventListener('keydown', (event)=> {
    if (event.key === 'Escape') {
        mobileMenu.classList.remove('active');
        mobileMenuTrigger.classList.remove('active');
    }
})