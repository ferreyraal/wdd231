document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primary-nav');

    navToggle?.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        primaryNav.style.display = expanded ? 'none' : 'block';
        navToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            primaryNav.style.display = '';
            navToggle?.setAttribute('aria-expanded', 'false');
        } else {
            primaryNav.style.display = 'none';
        }
    });

    if (window.innerWidth < 768) {
        primaryNav.style.display = 'none';
    }
});
