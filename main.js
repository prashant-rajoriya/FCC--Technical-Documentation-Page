let menu = document.getElementById('menuIcon');
let navbar = document.getElementById('navbar');
let close = document.getElementById('closeIcon')
let main = document.getElementById('main-doc');

menu.addEventListener('click', () => {
    navbar.style.display = 'flex';
    main.classList.add('mainChange');
});

close.addEventListener('click', () => {
    navbar.style.display = 'none';
    main.classList.remove('mainChange');
});