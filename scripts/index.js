window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar')
    window.scrollY > 150 ? nav.style.opacity = 0.9 : nav.style.opacity = 1;
})