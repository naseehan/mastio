let isMenuOpen = false;
let mobNav = document.querySelector('.mobile-nav');
let hamClass = document.querySelector('.hamburger')
hamClass.addEventListener('click', function() {

mobNav.classList.toggle('mobile-nav-toggle');

})