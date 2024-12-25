// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;

        if (target) {
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle ARIA attribute
    const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
    menuButton.setAttribute('aria-expanded', isExpanded);

    // Toggle icon between hamburger and close
    if (mobileMenu.classList.contains('hidden')) {
        menuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        `;
    } else {
        menuButton.innerHTML = `
            <svg class="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        `;
    }
});

// Collapsible Publication Details (Optional)
document.querySelectorAll('#publications button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const svg = button.querySelector('svg');

        content.classList.toggle('hidden');

        if (!content.classList.contains('hidden')) {
            svg.classList.add('transform', 'rotate-180');
        } else {
            svg.classList.remove('transform', 'rotate-180');
        }
    });
});
