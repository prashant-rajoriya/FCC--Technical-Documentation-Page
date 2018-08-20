let menu = document.getElementById('menuIcon');
let navbar = document.getElementById('navbar');
let close = document.getElementById('closeIcon')
let main = document.getElementById('main-doc');

menu.addEventListener('click', () => {
    navbar.style.display = 'flex';
});

close.addEventListener('click', () => {
    navbar.style.display = 'none';
});