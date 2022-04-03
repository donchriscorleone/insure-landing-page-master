const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');
const navClassList = nav.classList

burger.addEventListener('click', (e) => {
    navClassList.contains('nav-open') ? navClassList.remove('nav-open') : navClassList.add('nav-open')
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 750 && navClassList.contains('nav-open')) {
        navClassList.remove('nav-open');
    }
})