let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

 if (scrollTop === 0) {
       
        navbar.style.backgroundColor = 'transparent';
    } else if (scrollTop > lastScrollTop) {
       
        navbar.style.backgroundColor = '#ffffff'; 
    } else {
       
        navbar.style.backgroundColor = '#ffffff'; 
    }

    lastScrollTop = scrollTop;
});

